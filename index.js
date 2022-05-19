function myEach(collection, callback){
  if(Array.isArray(collection) === true){
    collection.forEach(callback)
  }else if(typeof(collection) === "object"){
    Object.values(collection).forEach(callback)
  }
  return collection
}

function myMap(collection, callback){
  if(Array.isArray(collection) === true){
    return collection.map(callback)
  }else if(typeof(collection) === "object"){
    return Object.values(collection).map(callback)
  }
}

function myReduce(collection, callback, acc){
  if(Array.isArray(collection) === true){
     if(typeof(acc) === 'number'){
      return collection.reduce(callback, acc)
    }else{
      return collection.reduce(callback)
    }
  }else if(typeof(collection) === "object"){
    return Object.values(collection).reduce(callback)
  }
}

function myFind(collection, predicate){
  if(Array.isArray(collection) === true){
    return collection.find(predicate)
  }else if(typeof(collection) === "object"){
    return Object.values(collection).find(predicate)
  }
}

function myFilter(collection, predicate){
  if(Array.isArray(collection) === true){
    return collection.filter(predicate)
  }else if(typeof(collection) === "object"){
    return Object.values(collection).filter(predicate)
  }
}

function mySize(collection){
  if(Array.isArray(collection) === true){
    return collection.length
  }else if(typeof(collection) === "object"){
    return Object.values(collection).length
  }
}

function myFirst(array, n){
  if(typeof(n) === 'number'){
    const num = array.slice(0,n)
    return num
  }else{
    const num = array.slice(0,1)
    return num[0]
  }
}

function myLast(array, n){
  if(typeof(n) === 'number'){
    const num = array.slice(array.length - n)
    return num
  }else{
    const num = array.slice(-1)
    return num[0]
  }
}

function myKeys(object){
  return Object.keys(object)
}

function myValues(object){
  return Object.values(object)
}