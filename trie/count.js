class TrieNode {
    constructor() {
      this.children = {};
      this.count = 0; // Number of times this word is inserted
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.count += 1; // Increment count when word is inserted
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return 0; // Word not found
        }
        node = node.children[char];
      }
      return node.count; // Return count of word occurrences
    }
  }
  
  // Test
  let trie = new Trie();
  trie.insert("apple");
  trie.insert("apple");
  trie.insert("banana");
  
  console.log(trie.search("apple")); // Output: 2
  console.log(trie.search("banana")); // Output: 1
  console.log(trie.search("grape")); // Output: 0
  