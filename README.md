# 💠 RNTaskTrainee_at_-HackerKernel

📌 Click the link below to open the full project on GitHub:  
🔗 [GitHub Repository](https://github.com/mradityak/RNTaskTrainee_at_-HackerKernel/tree/main)

---

# 🏍️ Product Manager App (React Native)

A simple and functional **React Native app** built as a task for HackerKernel.  
This app allows users to manage a product list locally, including adding, viewing, searching, and deleting products.

---

## 🚀 Features

- 📦 **Add Products**: Enter product name, price, and select an image from gallery  
- 📆 **Local Storage**: Data saved using `@react-native-async-storage/async-storage`  
- 𞷳 **Product List View**: Grid layout with `FlatList`  
- 🔍 **Search**: Filter products by name in real-time  
- 🗑️ **Delete**: Remove individual products with one tap  
- 👁️ **Toggle Password**: Show/hide password field using an eye icon  
- 🛍️ **Navigation**: Managed via React Navigation  
- ➕ **Floating Action Button (FAB)**: Easily navigate to add new product  

---

## 📸 Screenshots

> Add screenshots here showing:
> - Add Product screen
> - Product Grid View
> - FAB in action
> - Password toggle feature

---

## 🧰 Tech Stack

- React Native (with **Expo**)
- AsyncStorage
- Expo Image Picker
- React Navigation
- Ionicons (Expo Icons)

---

## 📦 Installation

```bash
git clone https://github.com/mradityak/RNTaskTrainee_at_-HackerKernel.git
cd RNTaskTrainee_at_-HackerKernel
npm install
npx expo start
```

---

## 𞷳 Project Structure

```
/components
  └── Product.js         # Product card UI
  └── FloatButton.js     # Floating action button
  └── ProductForm.js     # Form for adding products

/context
  └── ProductContext.js  # Global context for products

/screens
  └── HomeScreen.js      # Product listing screen
  └── AddItem.js         # Screen to add a new product
```

---

## ⚙️ Usage

- Tap the ➕ **floating action button** to add a product  
- Fill in the **name, price, and pick an image**  
- Use the **search bar** to filter products by name  
- Tap the 🗑️ **trash icon** on a product to delete it  
- Toggle password visibility using the **eye icon** on password field  

---

## 🔐 Password Toggle Example

```jsx
<TextInput secureTextEntry={!showPassword} />
<Ionicons name={showPassword ? 'eye-off' : 'eye'} />
```

---

## 📱 Requirements

- Node.js ≥ 14  
- Expo CLI  
- Android/iOS emulator or real device  

---

## 📌 To-Do (Coming Soon)

- 🔄 Edit/Update existing products  
- ☁️ Sync with cloud database or Firebase  
- 𞷳 Product categories or tags  
- 📄 Export/Import product data  

---

## 👨‍💻 Author

**Aditya Kumar**  
🔗 [GitHub: mradityak](https://github.com/mradityak)  
🔗 [LinkedIn (replace with your link)](https://www.linkedin.com/in/yourprofile)

---

## 📄 License

This project is licensed under the **MIT License**.

