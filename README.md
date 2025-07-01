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

![WhatsApp Image 2025-07-01 at 15 24 22_61c3a0ce](https://github.com/user-attachments/assets/bd63e029-c479-42f4-b9d2-dbe263669d68)
![WhatsApp Image 2025-07-01 at 15 24 21_480e87b8](https://github.com/user-attachments/assets/3d9491db-471c-41d8-832a-fa2b0af6c2b5)
![WhatsApp Image 2025-07-01 at 15 24 21_1c182290](https://github.com/user-attachments/assets/b2a6d9cb-40aa-42fc-8831-5373b711bd17)

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

