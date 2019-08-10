// Khai báo biến, cú pháp khai báo bắt đầu bằng từ khóa var
var myVar="Welcome to my page two"
alert(myVar);//Hoặc alert("Welcome to my page");

// Có 3 kiểu DL cơ bản: số,chuỗi, object,boolean
var var1=3;// Khai báo kiểu số
var var2="Welcome";//Khai báo kiểu chuỗi
var var3='Welcome';//Khai báo kiểu chuỗi
var var4='Welcome to"My page"';//Nếu muốn hiện ra dòng Welcome to"my page" 

// Có các phép toán tử như các ngôn ngữ lập trình khác: + - * / % -- ++ += -= /= %=

// Phép cộng dồn
var a="How are you";
var b="doing";
var c=a+b; //Khi đó c sẽ chứa giá trị How are you doing
c+="I'm fine";//Đến  bước này c sẽ có gtri How are you doing I'm fine

// Phép tính xen kẽ giữa số và chuỗi: chuỗi cộng số hay số cộng chuỗi sẽ ra 1 chuỗi
var d=5,f='6'; //số 5 và Chuỗi 6
var g=d+f;//sẽ ra là 56 do d là 5 và f là 6
var q=d+4+f;//sẽ ra là 96 do d+4 là 2 số cộng với nhau sẽ ra 9 rồi cộng với chuỗi

//Các phép so sánh:< > >= <= = ==(Bằng về gtri)  ===(Phép bằng tuyệt đói:bằng cả giá trị và kiểu dữ liệu)
//! khác nhau về gtri !== khác nhau cả về gtri và kiểu dữ liệu
// Câu lệnh if else

if(d>var1){
    alert("a lớn hơn hoặc bằng var1")
}else{
    var1--;
    alert("var1 lớn hơn d")
}
var su=0;
for(var i=0;i<100;i++){
    su+=i;
}
alert(su);

// while(i<100){
//     i++;
//     if(i==9){
//     break;
//     }
// }
// do{
//     sum+=i;
//     i--;
// }while(i<100);


// Cấu trúc swich case:
// DẠNG 1:
switch(var1){
    case 1:{
        var1+=1;
        break;
    }
    case 3:{
        var1+=2;
        break;
    }
    default:{
        var1+=3;
        break;
    }
}
// Dạng 2:
var var10=6;
switch(var10){
    // Nếu var1 bằng 1 hoặc bằng 3 thì +=2
    case 1:
    case 3:{
        var10+=2;
        break;
    }
    // Nếu var bằng 4 5 6 hoặc 7 thì +=4
    case 4:
    case 5:
    case 6:
    case 7:{
        var10+=4;
        break;
    }
    default:{
        var10+=3;
        break;
    }
}

// Dạng 3:
var var10=1;
switch(var10){
// Nếu var1 bằng 1 hoặc bằng 3 thì thực hiện câu lệnh 1 và câu lệnh case 3 vì case 1 k có tử khóa break
    case 1:{
        var10-=1;
    }
    case 3:{
        var10+=2;
        break;
    }
}
alert(var10);


// HÀM: 
// Hàm k tham số: function ten_ham(){}
function sum(){
    alert("Hello wordl");
}
// Hàm có tham số: function ten_ham(tham_so_1,tham_so_2)
function sum(a,b){
    var sum=a+b;
    alert(sum);
}

// Gọi hàm ra sử dụng
sum(12,2);

// Hàm trả về giá trị:
function mul(a,b){
    return a-b;
}
// Gọi hàm sử dụng
alert(mul(12,3));


// LỖI: GIỐNG NHƯ TRY CATCH TRONG JAVA
function div(a,b){
    // Cố tình khai báo biến k chưa được khai báo nên nó sẽ lỗi
    return div=a/k;
}

try{
    alert(div(1,3));
}catch(e){
    alert(e.message);
}

// Khi muốn tự thông báo lỗi:
function chia(a,b){
    if(b==0){
        throw"Lỗi chia cho 0";
    }else{
       return a/b;
        
    }
}
try{
    alert(chia(4,0));
}catch(e){
    alert("LỖI: "+e);
}


//-----------------------MẢNG
// Dạng 1: 

// Các giá trị lưu trong mảng có thể giống nhau hoặc k giống nhau(vừa là kiểu chuỗi vừa là kiểu số)
var arr=["xe máy","xe đạp",2,4,6];
// Khi muốn truy xuất đến phần tử trog mảng:
alert(arr[0]);//sẽ lấy ra "xe máy"

// Dạng 2:

var arr1=new Array();
arr1[0]="xe máy";
arr1[1]="xe đạp";
// Các phần tử khi khai báo kiểu như này sẽ cần phải theo thứ tự, nó chỉ là khóa để truy nhập đến ptu đó
arr1[100]=2;
arr1[101]=3;

// Dạng 3: Giong dang 2 nhưng khóa có thể lưu là 1 chuỗi
arr1["key1"]="xe bus";
arr1[3]=5;
arr1["key2"]="xe oto";

// CÁC PHƯƠNG THỨC HỖ TRỢ KIỂU CHUỖI
// giả sử str là biến kiểu chuỗi:
var str="Thank you for coming to see me, thank you verry much";
alert(str.length);//trả về số ký tự có trong chuỗi
alert(str.indexOf("you"));//trả về thứ tự của chuỗi you đtiên tìm thấy trong chuỗi str
alert(str.lastIndexOf("you"));//trả về thứ tự của chuỗi str2 cuối cùng tìm thấy trong chuỗi str
alert(str.slice(5,20));//cắt chuỗi str từ vtri 5 đến vtri trước 20
alert(str.search("Thank"));//tìm kiếm những chuỗi có đặc điểm như str2
alert(str.substring(3,51));//cắt chuỗi str từ vtri start đến vtri trước end
alert(str.substr(3,10));//cắt từ vtri start lấy lenght kí tự
alert(str.replace("you","u"));//Thay thế chuỗi you đtiên tim thấy bằng chuỗi u;
alert(str.toLowerCase());//Viết thường toàn bộ chuỗi
alert(str.toUpperCase());//Viết hoa toàn bộ chuỗi
alert(str.concat("i really really","miss you"));//cộng chuỗi, trong concat có thể có n chuỗi
alert(str.charAt(4));//trả về kí tự thứ 4 trong chuỗi
alert(str.charCodeAt(4));//trả về mã unicode của kí tự
alert(str[4]);//trả về kí tự thứ 4 trong chuỗi
var brr=str.split(" ");//cắt chuỗi ban đầu theo 1 chuỗi nào đó, trong trường hợp trên là cắt theo khoảng trắng có 11 phần tử
// Khi cắt xong chuỗi sẽ thành 1 mảng, muốn truy xuất đến phần từ trong mảng:
alert(brr[4]);

// -------------HÀM XỬ LÝ DỮ LIỆU SỐ
var No=124.56;
var a1=No.toString();//Chuyển số sang 1 chuỗi
var a2=No.toFixed(1);//Làm tròn đến 1 chữ số
var a3=No.toPrecision(4);//Làm tròn đến 4 chữ số đồng thời chuyển sang kiểu chuỗi
//--------------CÁC PHƯƠNG THỨC Math TRONG JAVASCRIP: Math.PI(Lấy số pi),Math.sin(x)(Tính sin(x))
//Math.floor(x)(Làm tròn x xuống), Math.sqrt(x)(Căn bậc 2 của x),Math.max(x1,x2,x3....xn)(Trả về số max trong dãy,có thể truyển trực tiếp 1 mảng)
//Học lập trình Web A-Z - JAVASCRIPT- Bài 12 - Đối tượng Math và các hàm toán học

// ------------Kiểu DATE:
// Lấy thời gian hiện tại
var d1=new Date();
//Truyền vào 1 thời gian theo các định dạng: Gỉa sử lấy ngày 25/12/2017
//var d2=new Data("2017/11/25");hoặc "11/25/2017";"Dec 25 2017";"Monday December 25 2017"

//Phương thức kiểu date:
//var D1=d2.getDate();//Lấy ngày của tháng: sẽ được ngày 25
//Lấy thứ trong tuần getDay(); gtri từ 0 đến 6 nên 6 sẽ là thứ 7
//Lấy năm: getFullYear();
// Lấy tháng: getMonth();gtri từ 0 đến 11
// Lấy giờ: getHours();từ 0 đến 23
//Lấy phút: getMinutes;
// Tính toàn bộ tg mili giây từ ngày 1/1/1970: getTime();
// Tính số phút chênh lệch từ giờ địa phương với giờ qte: getTimezoneOffset();
// Lấy ngày trong tháng theo thời gian qte: getUTCDate(); cứ Thêm UTC trước các phương thức trên là ra ngày tháng năm giờ phút theo tg qte
// Đổi lại ngày tháng năm h phút s bằng cách thêm set: setMonth(10);đổi lại từ tháng 12 thành tháng 11
// Đổi lại ngày tháng năm h phút s theo giờ qte bằng cách thêm set: setUTCMonth(10);đổi lại từ tháng 12 thành tháng 11



// ---------------- DOM và kỹ thuật thao túng nội dung trang HTML

// JS DOM SELECTOR
/*
var obj =document.getElementById("Truyen-vao-id-cua-the-html");Lấy về 1 obj
var obj=document.getElementsByTagName("Truyen vao 1 the html.VD la the p"); Lấy về 1 mảng obj
obj=document.getElementsByClassName("Truyen vao ten class");Lấy về 1 mảng obj
obj=document.querySelector("Truyen vao CSS-SELECTOR");Lấy về 1 obj
obj=document.querySelectorAll("Truyen vao CSS-SELECTOR");Lấy về 1 mảng obj

*/

//JS DOM CONTENT-Reading:Khi đã có được đối tượng cần thao tác ta có thể tiến hành thay đổi đối tượng đó
/*
var html_content=obj.innerHTML;trả về nội dung bên trong thẻ html
VD: <b>Học tập </b> thực hiện câu lệnh trên ta lấy được Học tập
var html_content=obj.outerHTML;trả về nội dung bên trong+tên thẻ html
VD: <b>Học tập </b> thực hiện câu lệnh trên ta lấy được <b>Học tập<b>
*/

var obj19=document.getElementById("div1");
var content_1=obj19.innerHTML;
alert(content_1);

var obj22=document.getElementsByTagName("p")
var content_2=obj22[0].innerHTML;//Chỉ đọc được thẻ đầu tiên nên chỉ truyền được chỉ số 0
alert(content_2);

var obj3=document.querySelector("#div1.my-class");//chọn thẻ css có tên id là div1 và tên class là word
var content_3=obj3.innerHTML;
alert(content_3);

//JS DOM CONTENT-Writing: Thay đổi nội dung của đối tượng được chọn
/*
obj.innerHTML="Nội dung mới";Nội dung bên trong của thẻ html đó sẽ bị thay đổi
obj.outerHTML="<p>Nội dung mới<p>";Nội dung bên trong thay đổi và thẻ từ 1 thẻ nào đó sẽ chuyển sang thẻ p
*/

var obj4=document.querySelector(".q3 #p1");
obj4.innerHTML="Nội dung mới";

//JS DOM ATTRIBUTES-Reading: lấy ra tên của class mà mình đặt
//var g1=obj.getAttributes("ten-thuoc-tinh(Là id hoặc class)")
//JS DOM ATTRIBUTES-Writing: đổi tên của class mà mình đặt
//obj.setAttributes("ten-thuoc-tinh(Là id hoặc class)","tên-giá-trị-mới");
var gt1=obj4.getAttribute("class");
alert(gt1);
obj1.setAttribute("class","word");
var b3=document.getElementsByClassName("b4");
//b3.setAttribute("style","background-color:red");

// JS DOM CSS
//Understanding:obj.style._ten_thuoc_tinh_css 
//Writing: obj.style._ten_thuoc_tinh_css ="ten-thuoc-tinh-moi"


//JS DOM FORM VALUE dùng để đọc và ghi giá trị cho các thẻ trong form
//Để đọc 1 giá trị mà người dùng nhập vào ta dùng var v1=obj.value trong đó obj phải là 1 trong các thẻ 
//của form như: input,select hoặc bất cứ thẻ nào có thuộc tính value đi kèm.
//Để lấy ta làm như sau:
//var a1=document.getElementsByClassName("b4"); lấy tên thẻ
//var a2=a1.value;lấy giá trị trong thẻ đó
//var a3=parserInt(a2); chuyển sang dạng số nếu nó là chuối và ngược lại theo ý mình muốn
//Set giá trị mới: obj.value="giá trị mới";


// ---------------OBJECT:
//Tạo obj trong javascip:
function Student(Name,Age,Class){
    this.NAME=Name;
    this.AGE=Age;
    this.CLASS=Class;
    this.information=function(){
        return Name+'\tTuổi: '+Age+' \tLớp: '+Class;
    }
}

//Dùng obj vừa tạo:
var s=new Student("Nguyễn Minh Hằng",20,'DBVC4')
alert(s.information());


function Monitor(Father,add){
    this.FATHER=Father
    this.ADD=add;
    this.MONITOR=new Student('Kiều Thị Hằng',21,'DBVC5')
}

var s1=new Monitor('Nguyễn Văn Hùng','Hà Nội');
alert(s1.MONITOR.information());

//------------------------EVENT:
// Có 3 cách tạo event:
//C1: <element Tenevent="ten_ham();"
//C2:obj.Tenevent="ten_ham";
//C3:obj.Tenevent=function(){}

//VD cách sử dụng 1: hàm này chạy khi html đã load xong hết
function setupfile(){
    var obj15=document.getElementsByClassName("a2");
    //VD cho cách sủ dụng 2:khi nhấn vào a2 thì nó sẽ thực hiện hàm div_a2
    obj15.onclick=div_a2;
    var obj11=document.getElementsByClassName('a3');
    obj11.onmouseover=div_a3_in;
    var obj12=document.getElementsByClassName('a3');
    obj12.onmouseout=out;
}


//Hàm này được gọi khi click lên thẻ a2
function div_a2(){
    var obj10=document.getElementsByClassName("a2");
    obj10.innerHTML=(new Date()).getSeconds();//Lấy ra giây hiện tại của hệ thống

    //Đổi background color của a2:
    obj10.setAttribute('style','background-color:green');
}
//Hàm này chạy khi dê chuột đến a3
function div_a3_in(){
    var obj14=document.getElementsByClassName("a3");
    obj14.innerHTML=(new Date()).getSeconds();//Lấy ra giây hiện tại của hệ thống

    //Đổi background color của a2:
    obj14.setAttribute('style','background-color:red');
}
function div_a2_out(){
    var obj13=document.getElementsByClassName("a3");
    obj13.innerHTML=(new Date()).getSeconds();//Lấy ra giây hiện tại của hệ thống

    //Đổi background color của a2:
    obj13.setAttribute('style','background-color:white');
}

// ---------------JSON:
// VD 1 json:
var js1={"name":"Michel Amada","Age":20};
var js2={
    "name":"Michel Amada",
    "Age":20
};
// 1 json có thể nhận vào các giá trị là: chuỗi,số,một mảng,1 json khác
var js3={
    //phần tử đầu là 1 mảng:
    "data":
    [
        125,//phần tử đầu của mảng là 1 số
        {"name":"Michel Amada","Age":20},//phần tử 2 của mảng là 1 json
        "Hello word"
    ],
    //phần tử 2 là 1 json:
    "count": 3000,
    // Phần tử 3 là 1 json trong đó có 1 json khác
    "more infor":{"name":"Chris Evan", "Age":30}
}

// Ta cần phân biết giữa chuỗi json và json: chuỗi json là nói về chuỗi DL theo đúng nguyên tắc json,
//sòn json là nói về obj được tạo ra từ chuỗi json
//var js1={"name":"Michel Amada","Age":20}; đây là chuỗi json
//var js1_obj=JSON.parse(js1);//đây là biến json được tạo ra từ chuỗi json
//js1_obj.name ta sẽ truy cập vào thuộc tính name của json và lấy được Michel Amada
//js1_obj.name="Họ tên mới"ta sẽ truy cập vào thuộc tính name của json và thay đổi giá trị cho nó
//var js1_obj2=JSON.stringify(js1_obj): nó sẽ tạo ra 1 json mới y hệt như js1_obj nhưng phần name đã bị đổi thành "Họ tên mới"

// VD:
var js4='{"name":"Chris Evan", "Age":30}';
var js4_obj=JSON.parse(js4);
alert(js4_obj.name);//sẽ in ra Chris Evan

js4_obj.name="Selena Gomez";
var js5=JSON.stringify(js4_obj);
alert(js5);//sẽ in ra {"name":"Selena Gomez", "Age":30}'

var js6='{"name":"Chris Evan", "Age":30, "more_infor":{"name":"Chris Evan", "Age":30}}';
var js6_obj=JSON.parse(js6);
alert(js6_obj.more_infor.name);//lấy được tên trong phần more_infor


// đây là 1 json gồm 3 phần tử và phần từ cuối là 1 json khác có 1 mảng 3 phần tử
var js6='{"name":"Chris Evan", "Age":30, "more_infor":[123,"abc",{"id":"1234rtt"}]}';
var js6_obj=JSON.parse(js6);
alert(js6_obj.more_infor[2].id);//chấm đến moreinfor ta sẽ lấy được phần từ thứ 3 là moreinfro nhưng
//vì moreinfor là 1 json có 3 phần từ nên muốn lấy phàn tử của 1 mảng ta phải dùng chỉ số để truy cập
//vì moreinfor ở phần tử 2 nên [2] và chấm đến id ta sẽ lấy được tên id