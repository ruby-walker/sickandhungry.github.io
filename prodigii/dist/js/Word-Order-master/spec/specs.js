describe('wordOrder', function(){
  it('will output the word from a one word string', function(){
    expect(wordOrder("Hello")).to.equal("Hello");
  });

  it('will output two words from a two word string', function() {
    expect(wordOrder("Hello World")).to.equal("Hello,World");
  });

  it('will output three words from a three word string', function(){
    expect(wordOrder("Hello new world")).to.equal("Hello,New,World");
  });

  it('will output three words as it appears in the string', function() {
    expect(wordOrder("Hello world new")).to.equal("Hello,World,New")
  });

  it('will order the output of words based on their frequency', function() {
    expect(wordOrder("Hello world world")).to.equal("World,Hello")
  });

  it('will default to input order if frequency of word is the same', function(){
    expect(wordOrder("Hello Hello world world")).to.equal("Hello,World")
    expect(wordOrder("world world Hello Hello")).to.equal("World,Hello")
    expect(wordOrder("Able was I ere I saw Elba")).to.equal("I,Able,Was,Ere,Saw,Elba")
  });

  it('will put out a result that is case insensitive', function() {
    expect(wordOrder("Hello world hello")).to.equal("Hello,World")
  });

});
