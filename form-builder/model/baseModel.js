import { Model } from 'racer'

export default class baseModel extends Model.ChildModel {

  dereferenceSelf() {
    const model = this.root
    const segments = model._splitPath(this.path())
    const dereference = model.scope(model._dereference(segments, true).join('.'));
    console.log(dereference);
    return dereference;
  }
  
  getRedisClient() {
    const model = this.root
    const backend = model.backend
    if (!backend) return
    const pubsub = backend.pubsub
    if (!pubsub) return
    const RedisClient = pubsub.client
    return RedisClient
  }

  setRedisData(key, data, timeout) {
    return new Promise((resolve, reject) => {
      const redisClient = this.getRedisClient();
      console.log(redisClient);
      if (!redisClient) reject(new Error('No redis available'));
      let d;
      try {
        d = JSON.stringify(data);
      } catch (e) {
        return reject(e);
      }
      if (timeout) {
        redisClient.set(key, d, 'PX', timeout);
      } else {
        redisClient.set(key, d);
      }
      resolve(true);
    })
  }

  getRedisData(key) {
    return new Promise((resolve, reject) => {
      const redisClient = this.getRedisClient();
      if (!redisClient) reject(new Error('No redis available'));
      redisClient
        .get(key)
        .then(d => {
          let data;
          try {
            data = JSON.parse(d);
          } catch (e) {
            return reject(e);
          }
          resolve(data);
        })
        .catch(e => {
          reject(e);    
        })
    })
  }
}
