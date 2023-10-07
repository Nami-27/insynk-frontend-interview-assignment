// Function to add an item to a category
export function addToCategory(item: string): void {
  const storedCategories: string[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );
  storedCategories.push(item);
  localStorage.setItem("categories", JSON.stringify(storedCategories));
}

// Function to remove an item from a category
export function removeFromCategory( index: number): void {
  let storedCategories: string[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );
  if (storedCategories) {
    if (index >= 0 && index < storedCategories.length) {
      storedCategories.splice(index, 1); // Remove the item at the specified index
      localStorage.setItem("categories", JSON.stringify(storedCategories));
    }
  }
}
