// const express = require('express');
// const app = express();
// const port = 3000;

// // Giả định dữ liệu người dùng ban đầu
// let users = [
//   { id: 1, name: 'John Doe', age: 25 },
//   { id: 2, name: 'Jane Smith', age: 30 },
// ];

// app.use(express.json());

// // Điểm cuối API để cập nhật thông tin người dùng
// app.put('/api/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const updatedUser = req.body;

//   // Tìm người dùng theo id trong danh sách người dùng
//   const user = users.find((user) => user.id === userId);

//   // Kiểm tra xem người dùng có tồn tại không
//   if (!user) {
//     return res.status(404).json({ message: 'Người dùng không tồn tại' });
//   }

//   // Cập nhật thông tin người dùng
//   user.name = updatedUser.name;
//   user.age = updatedUser.age;

//   res.json({ message: 'Cập nhật thông tin người dùng thành công', user });
// });

// app.listen(port, () => {
//   console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
// });


const express = require('express');
const app = express();
const port = 3000;

// Giả định dữ liệu người dùng ban đầu
let users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
];

app.use(express.json());

// Điểm cuối API để cập nhật thông tin người dùng
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  // Tìm người dùng theo id trong danh sách người dùng
  const user = users.find((user) => user.id === userId);

  // Kiểm tra xem người dùng có tồn tại không
  if (!user) {
    return res.status(404).json({ message: 'Người dùng không tồn tại' });
  }

  // Cập nhật thông tin người dùng
  user.name = updatedUser.name;
  user.age = updatedUser.age;

  // In thông tin người dùng sau khi cập nhật ra console
  console.log('Thông tin người dùng sau khi cập nhật:', user);

  res.json({ message: 'Cập nhật thông tin người dùng thành công', user });
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
});
