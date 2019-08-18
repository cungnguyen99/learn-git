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

git checkout name-branch: Chuyển sang nhánh có tên là name-branch để làm việc

git checkout -b name-branch: tạo 1 branch mới và chuyển sang nhánh đó làm việc luôn.  Đây là lệnh tắt của việc tạo 1 branch và chuyển sang branch đó làm việc. Thông thường 1 trang web khi ta viết có nhiều trang khác nhau như contact, about us... thì mỗi trang như thế người ta sẽ tạo ra nhánh(branch) khác nhau để làm việc. Sau khi đã hoàn thành chỉnh chu từng nhánh sẽ đưa vào nhánh chính(master). Khi ta viết lệnh trên có nghĩa ta đang làm việc ở nhánh có tên name-branch, vì thế mọi câu lệnh ta làm như git add name-file sẽ được thêm vào nhánh name-brach chứ không phải nhánh chính. Nên khi ta mở 1 nhánh đang làm việc thì ở trong visual code của ta chỉ hiện file đã add vào trong nhánh đó còn nếu ta mở nhánh khác làm việc thì ở trong visual code sẽ mất file mà ta đã add ở nhánh trước. Ví dụ như ta tạo 1 file branch.js và cho nó vào nhánh feature/branch-class thì khi ta làm việc ở nhánh feature/branch-class thì mới nhìn thấy file này trong js còn nếu ta đang làm việc ở nhánh khác thì sẽ không thấy

git branch: để xem có mấy branch và ta đang ở nhánh nào

git merge: thêm 1 nhánh vào 1 nhánh khác. Vd khi ta muốn thêm nhánh B vào A. Lúc đầu ta phải dùng git checkout A rồi git merge B ta sẽ thêm được B vào A. Sau khi ta đã chắc chắn muốn đưa nhánh B vào A thì ta sẽ xóa nhánh B đi để cho repon sạch sẽ. Ta sẽ add nhánh feature/branch-class vào master nên master lúc này sẽ chứa luôn tất cả những gì có trong feature/branch-class

git branch -d name-branch để xóa bỏ nhánh muốn xóa. 

git reset --soft id-of-commit: quay trở lại commit muốn thay đổi. Đối với lệnh này thì file thay đổi sẽ ở trạng thái màu xanh chỉ chờ để commit lại chứ không cần add lại và ở trong file code của visua studio cũng không biến mất vì nó vẫn đang ở trong staring area chỉ chờ để commit, tức nó đang ở staring area rồi chỉ cần commit

git reset --mixed id-of-commit: quay trở lại commit muốn thay đổi. Đối với lệnh này thì file thay đổi sẽ ở trạng thái màu đỏ và cần phải add vào staring area rồi commit và ở trong file code của visua studio cũng không biến mất vì nó vẫn đang ở trong working directory và chuẩn bị được add vào staring area. Tức khi dùng câu lệnh này nó sẽ xuống hẳn working directory và phải add lại vào staring area rồi mới sửa commit được

git reset --hard id-of-commit: Bỏ hẳn commit đó và những commit nó gặp trên đường đi. Nó bỏ hẳn ra khỏi working directory nên trong file vs cũng sẽ mất thay đổi mà ta commit

git revert id-of-commit: tạo ra 1 commit mới revert từ commit muốn thay đổi. Và nó không xóa những commit trên đường đi nó gặp. Nó chỉ xóa luôn những thay đổi của commit đó trong file vs của nó thôi. Nên cần cẩn thận khi dùng cái này do nó sẽ xóa luôn những thay đổi đó.

.gitignore: dùng để bỏ qua nhưng file hay thư mục không muốn đưa vào staring area, nó sẽ không hiện ra khi ta nhấn git status, mặc dù nó mới tạo và chưa được commit nhưng n vẫn không báo. trong file gitignore nhấn tên file hoặc thư mục muốn ẩn đi. 

push project lên github: use conmand 'git remote add origin name-link' --> git remote -v --> git push hoặc git push -u origin master