
const express = require('express');
const db = require('../models'); 

// use formsdb
// db.createCollection('forms')
// db.createCollection('fields')

let formRoutes = express.Router();

const createForm = function(form) {
    return db.Form.create(form).then(newForm => {
        console.log('Created form successfully!', newForm);
        return newForm;
    }, (err) => {
        console.log('Error creating form:', err);
        return null;
    });
};

const addFieldsToForm = async function(formId, fields) {
    let form = new Promise((resolve, reject) => {
        console.log('Adding fields to form');
        const formFields = fields.map(field => {
            return db.Field.create(field).then(formField => {
                console.log('Created field successfully!', formField, formId);
                return db.Form.findByIdAndUpdate(formId, 
                    { $push: { fields: formField._id } },
                    { new: true, useFindAndModify: false }
                );
            });
        });   
        resolve(true);             
    }, (err) => {
        console.log('Error:', err);
        reject(false);
    });
    return form;
    // return db.Form.findByIdAndUpdate(
    //     formId,
    //     {
    //         $push: {
    //             fields: {
    //                 label: field.label,
    //                 visible: field.visible,
    //                 required: field.required,
    //                 order: field.order,
    //                 type: field.type
    //             }
    //         }
    //     },
    //     { new: true, useFindAndModify: false }
    // );
};

const run = async (form, fields) => {
    let newForm = await createForm(form);
    if (!newForm) return;
    let areFormFieldsAdded = await addFieldsToForm(newForm._id, fields);
    console.log('Are form fields added?', areFormFieldsAdded);
    console.log('Form Created!', newForm);
};

formRoutes.route('/').get((req, res) => {
    db.Form.find((error, forms) => {
        if (error) {
            console.log('Error:', error);
            return;
        }
        if (forms.length === 0) {
            run(
                { name: 'Sample Form', description: 'Sample Form Description' },
                [ 
                    {
                        label: 'Sample Field 1',
                        visible: true,
                        required: true,
                        order: 1,
                        type: 'text'
                    },
                    {
                        label: 'Sample Field 2',
                        visible: true,
                        required: false,
                        order: 2,
                        type: 'textArea'
                    }
                ]
            );
        }
        res.json(forms);
    });
});

const getFormFields = (form) => {
    return new Promise((resolve, reject) => {
        let fieldsList = [];
        form.fields.forEach(async(field) => {
            console.log('fieldId:'+field);
            let returnedField = await getFieldDetails(field);
            fieldsList.push(returnedField);
            console.log(fieldsList.length, form.fields.length);        
            console.log('resolving fieldsList:'+JSON.stringify(fieldsList));
            if (fieldsList.length === form.fields.length) resolve(fieldsList);
        });
    });
}

const getFieldDetails = (field) => {
    return new Promise((resolve, reject) => {
        console.log('field details:'+field);
        db.Field.findById({_id: field}, (error, returnedField) => {
            if (error) {
                console.log('Error:', error);
                resolve({'Fields': 'There was an error while retrieving the form fields'});
            }              
            console.log('return field:'+returnedField);    
            resolve(returnedField);
        });
    });
}

formRoutes.route('/:id').get((req, res) => {
    db.Form.findById({_id: req.params.id}, async (error, form) => {
        if (error) {
            console.log('Error:', error);
            return;
        }        
        let fieldsList = await getFormFields(form); 
        form.fields = fieldsList;
        res.json(form);
    });
});

formRoutes.route('/:id').delete((req, res) => {
    db.Form.findByIdAndDelete({_id: req.params.id}, (error, deletedForm) => {
        if (error) {
            console.log('Error:', error);
            res.status(400).json( {'Forms': `There was an error while deleting the form!`} );
            return;
        }
        res.status(200).json( { 'Forms': `${deletedForm.name} form is successfully deleted from the DB!` });
    });
});

formRoutes.route('/').put((req, res) => {
    db.Form.find((error, forms) => {
        if (error) {
            console.log('Error:', error);
            return;
        }
        res.json(forms);
    });
});

module.exports = formRoutes;