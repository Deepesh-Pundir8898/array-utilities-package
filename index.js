class ArrayUtils {
    /**
     * Get the sum of all numbers in the array.
     */
    static sum(array) {
      return array.reduce((acc, val) => acc + val, 0);
    }
  
    /**
     * Remove all duplicate values from the array.
     */
    static unique(array) {
      return [...new Set(array)];
    }
  
    /**
     * Get the average of all numbers in the array.
     */
    static average(array) {
      if (array.length === 0) return 0;
      return this.sum(array) / array.length;
    }
  
    /**
     * Group elements of the array by a callback function.
     */
    static groupBy(array, callback) {
      return array.reduce((grouped, item) => {
        const key = callback(item);
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item);
        return grouped;
      }, {});
    }
  
    /**
     * Flatten a nested array to a single level.
     */
    static flatten(array) {
      return array.reduce((flat, item) => flat.concat(Array.isArray(item) ? this.flatten(item) : item), []);
    }
  
    /**
     * Get the maximum value in the array.
     */
    static max(array) {
      return Math.max(...array);
    }
  
    /**
     * Get the minimum value in the array.
     */
    static min(array) {
      return Math.min(...array);
    }
  
    /**
     * Remove all falsy values from the array.
     */
    static compact(array) {
      return array.filter(Boolean);
    }
  
    /**
     * Create a chunked array of a specified size.
     */
    static chunk(array, size) {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    }
  
    /**
     * Shuffle the array randomly.
     */
    static shuffle(array) {
      return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }
  }
  
  module.exports = ArrayUtils;
  