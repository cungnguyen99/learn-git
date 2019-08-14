This project is just a demo 

git init: viết đầu tiên khi mở project để tạo thư mục .git trong file

git status: Kiểm tra xem có gì thay đổi trong project hay không nếu có sẽ thông báo

git add name-file: thêm vào git 1 file mới hay 1 sự thay đổi nào đó đã có sẵn trong git. Nếu có 2 file bị thay đổi mà ta muốn commit cho từng cái thì ta add từng cái rồi commit

git add . : để thêm tất cả thay đổi cùng 1 lúc

git commit -m 'Đoạn text mô tả công việc vừa làm'

git log: xem có những commit nào được viết

git show id-commit: show ra commit và sự thay đổi của file
Nếu khi viết git status để kiểm tra xem có gì thay đổi hay không: nếu có dạng 'modifeid: name-file' thì có nghĩa file đó đã được thêm vào git rồi và có sự thay đổi. Còn nếu không có dạng trên mà nó chỉ màu đỏ không thì có nghĩa file đó chưa được thêm vào git

git diff: Xem những dòng thay đổi của file có dạng 'modifeid: name-file' chỉ xem được nếu ta chưa add nó vào staring area. Dấu + và chữ màu xanh là thể hiện nhũng nội dung mới được thêm vào 

Working directory: là những thư mục hay file mà mình đang làm việc nằm cùng thư mục .git

Staring area: sau khi ta add và kiểm tra git status thấy nó chuyển sang màu xanh ta gọi đó là đang ở trong staring area

git repository: lưu lại tập hợp các commit

git checkout -- name-file: bỏ đi sự thay đổi trong file đã add vào git. Còn nếu ta tạo 1 file mới mà chưa add vào git thì có nghĩa nó chưa có trong staring area nên nếu dùng git checkout -- name-file sẽ báo lỗi. Cũng như khi ta dùng git diff để xem nội dung thay đổi trong file mà file đó chưa có trong staring area thì nó cũng không xem được

git reset HEAD name-file: đưa nó ra khỏi staring area tức là khi ta đã cho nó lên staring rồi mà muốn cho nó ra

