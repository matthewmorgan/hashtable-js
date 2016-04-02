import HashTable from './hashTable';


describe('HashTable', ()=> {

  let hashTable;
  
  beforeEach(()=> {
    hashTable = new HashTable();
  });

  it('returns undefined when a key is absent', ()=> {
    expect(hashTable.get('monkey')).toEqual(undefined);
  });

  //hash tests are disable as we're making this private
  xit('uses a hash function to hash a key', ()=> {
    const expected = String('monkey'.length % 3);
    expect(hashTable.hash('monkey')).toEqual(expected);
  });


  xit('gives a different hash value for a different key', ()=> {
    const expected = String('elephant'.length % 3);
    expect(hashTable.hash('elephant')).toEqual(expected);
  });

  it('returns the stored value when given a key', ()=> {
    const expected = 'banana';
    hashTable.set('monkey', 'banana');
    expect(hashTable.get('monkey')).toEqual(expected);
  });

  xit('handles hash collisions by allowing multiple keys under the same hash', ()=> {
    hashTable.set('monkey', 'banana');
    hashTable.set('gerbil', 'seeds');
    expect(hashTable.get('monkey')).toEqual('banana');
    expect(hashTable.get('gerbil')).toEqual('seeds');
  });

  it('overwrites the previous value when the same key is written to again', ()=> {
    hashTable.set('monkey', 'banana');
    hashTable.set('monkey', 'monkey chow');
    expect(hashTable.get('monkey')).toEqual('monkey chow');
  });

  it('knows its size', ()=> {
    hashTable.set('monkey', 'banana');
    expect(hashTable.size()).toEqual(1);
    hashTable.set('gerbil', 'seeds');
    expect(hashTable.size()).toEqual(2);
  });

});
