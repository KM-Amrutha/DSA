class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isEndOfWord = false; 
        // Marks end of a word
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
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // 🔹 Check if a prefix exists in the Trie
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true; 
    }

     
    findAllWordsWithPrefix(prefix) {
        let words = [];
        let node = this.searchPrefix(prefix);
        if (node) {
            this.collectAllWords(node, prefix, words);
        }
        return words;
    }

    
    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }

    collectAllWords(node, prefix, words) {
        if (node.isEndOfWord) { 
            words.push(prefix);
        }
        for (let char in node.children) {
            this.collectAllWords(node.children[char], prefix + char, words);
        }
    }

    longestCommonPrefix() {
        let prefix = "";
        let node = this.root;
    
        while (node && !node.isEnd && Object.keys(node.children).length === 1) {
          let char = Object.keys(node.children)[0];
          prefix += char;
          node = node.children[char];
        }
    
        return prefix;
      }
}
 
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apply");
trie.insert("bat");
trie.insert("ball");

console.log(trie.findAllWordsWithPrefix("app")); // ["app", "apple", "apply"]

console.log(trie.search('app'))


