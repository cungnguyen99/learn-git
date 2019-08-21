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

git branch -d name-branch để xóa bỏ nhánh muốn xóa. Muốn xóa branch nào thì ta phải thoát khỏi branch đó đã mới xóa được. VD ta có 2 branch feature và master, muốn xóa feature thì phải dùng git checkout master để chuyển sang master để k còn ở feature nếu lúc trước ta còn ở đó rồi mới xóa được.

git reset --soft id-of-commit: quay trở lại commit muốn thay đổi. Đối với lệnh này thì file thay đổi sẽ ở trạng thái màu xanh chỉ chờ để commit lại chứ không cần add lại và ở trong file code của visua studio cũng không biến mất vì nó vẫn đang ở trong staring area chỉ chờ để commit, tức nó đang ở staring area rồi chỉ cần commit

git reset --mixed id-of-commit: quay trở lại commit muốn thay đổi. Đối với lệnh này thì file thay đổi sẽ ở trạng thái màu đỏ và cần phải add vào staring area rồi commit và ở trong file code của visua studio cũng không biến mất vì nó vẫn đang ở trong working directory và chuẩn bị được add vào staring area. Tức khi dùng câu lệnh này nó sẽ xuống hẳn working directory và phải add lại vào staring area rồi mới sửa commit được

git reset --hard id-of-commit: Bỏ hẳn commit đó và những commit nó gặp trên đường đi. Nó bỏ hẳn ra khỏi working directory nên trong file vs cũng sẽ mất thay đổi mà ta commit

git revert id-of-commit: tạo ra 1 commit mới revert từ commit muốn thay đổi. Và nó không xóa những commit trên đường đi nó gặp. Nó chỉ xóa luôn những thay đổi của commit đó trong file vs của nó thôi. Nên cần cẩn thận khi dùng cái này do nó sẽ xóa luôn những thay đổi đó.

.gitignore: dùng để bỏ qua nhưng file hay thư mục không muốn đưa vào staring area, nó sẽ không hiện ra khi ta nhấn git status, mặc dù nó mới tạo và chưa được commit nhưng n vẫn không báo. trong file gitignore nhấn tên file hoặc thư mục muốn ẩn đi. 

push project lên github: use conmand 'git remote add origin name-link' --> git remote -v --> git push hoặc git push -u origin master(Chỉ dùng khi là lần đầu push còn từ lần sau dùng git push). Muốn push commit lên thì làm như bth: git add--> git commit-->git push -u origin master

Khi muốn join vào 1 project nào đó(A doing procject and B wanna join it): A phải gửi link cho B rồi B nhấn vào chỗ Clone or dowload để coppy đường link rồi vào cmd dùng lệnh git clone paste-tên-đường-link vào nhấn enter nó sẽ coppy giống y 1 thư mục gồm các file trong project của A và có lịch sử commit giống y A. Sau đó A (hoặc B) lại push các commit khác lên và B(hoặc A) muốn xem thay đổi đó thì bên muốn xem thay đổi dùng lệnh git pull để tải sự thay đổi về xem. CHỈ DÙNG TRONG TRƯỜNG HỢP 1 NGƯỜI PUSH 1 NGƯỜI PULL thì mới làm được như thế còn VỪA PULL VỪA PUSH thì không được. 

Cách tạo 1 branch và push lên github: làm như khi tạo ở trong may tính. B1 tạo 1 branch git checkout -b name-branch
rồi cho file thay đổi hoặc thư mục vào branch đó. Sau khi add và commit xong đưa lên github bằng command git push origin name-branch

Khi người A muốn người B xem branch mình vừa tạo(hay còn gọi là code view) thì người A phải vào Branch rồi nhấn vào phần branch sẽ thấy branch mình vừa tạo sau đó nhấn vào new pull request rồi nhấn creat. Bên A gửi link hoặc bên B load lại trang sau đó sẽ thấy ở phần pull request có 1 pull requset mới nhấn vào và thấy pull request bên A muốn bên B xem rồi bên B sẽ cmt để bên A sửa. Sau khi sửa ưng ý rồi B sẽ merge vào. Sau khi sửa xong theo ý B thì thì A push lên git phải dùng câu lệnh đúng với nó, nếu sửa file ở chỗ branch nào thì phải dùng git push origin name-branch đó k được dùng git push không. git push chỉ dùng cho branch master

Sau khi người A tạo ra nhánh khác và push lên rồi nhờ ng B sửa cho. B muốn down code về và xem thì dùng 
git fetch origin name-brach (tên branch muốn down code về để check) thì code sẽ được down về máy và chạy thử. Sau khi check xong rồi thì merge ngay trên github,  merge trên git xong xóa luôn brach đó. sau khi xóa 
brach đó trên git phải quay về local dùng git branch -D name-branch để xóa lại ở local. Nhưng sau khi xóa xong thì 
các file ỏ máy mà ở nhánh đó sẽ biến mất nên ta phải dùng git pull để đồng bộ những thay đổi trên git với máy.
khi đó các file ở nhánh đó mới xuất hiện trong nhánh master ở loacl 


Resolve conflict sử dụng rebase: Khi 2 người cùng thay đổi một file và push lên git. 
+B1 mỗi người tạo 1 nhánh khác nhau từ master.
+B2 mỗi người sửa cùng 1 file ở 2 máy khác nhau.
+B3 sau khi 1 người nào đó push lên git xong thì ng kia phải pull về bằng command git pull. NHỚ PHẢI PULL VỀ BẰNG GIT PULL
+B4 nếu ng nào merger vào master đầu tiên thì sẽ k bị conflict còn ng sau sẽ bị conflict. Người bị conflict sẽ
Resolve conflict đó(tức là fix lại để merger vào master) và sửa như sau:
    -Chuyển sanng nhánh master
    -pull code từ master về bằng cách git pull origin master sẽ có code của ng vừa merge đầu tiên trong file mà k bị conflict
    -Chuyển branch mà đang bị conflict
    -use command git rebase master rồi vào file mà ta vừa thay đổi xóa những chỗ bị thừa
    -git status--> rồi add vào rồi chạy git rebase --continue
    -cuối cùng chạy git push origin branch-name -f
    -Rồi lên git merger vào là xong

Resolve conflict sử dụng merge: 
+B1 mỗi người tạo 1 nhánh khác nhau từ master.
+B2 mỗi người sửa cùng 1 file ở 2 máy khác nhau.
+B3 sau khi 1 người nào đó push lên git xong thì ng kia phải pull về bằng command git pull.
+B4 nếu ng nào merger vào master đầu tiên thì sẽ k bị conflict còn ng sau sẽ bị conflict. Người bị conflict sẽ
Resolve conflict đó(tức là fix lại để merger vào master) và sửa như sau:
    -Chuyển sanng nhánh master rồi pull về bằng git pull sẽ có code của ng vừa merge đầu tiên vào trong file mà k bị conflict
    -Chuyển branch mà đang bị conflict
    -dùng lệnh git merge master rồi vào file mà ta vừa thay đổi xóa những chỗ bị thừa
    -git status--> rồi add rồi commit 
    -sau đó push lại lên git bằng git push origin branch-name.

************CHÚ Ý: Tránh sử dụng cách 1 khi có nhiều ng làm việc chung