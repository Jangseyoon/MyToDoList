# MyToDoList
투두리스트 만들어보기<br><br>
![image](https://user-images.githubusercontent.com/92420662/230879677-cfc079f2-bd47-4c93-af7a-95a32588abdb.png)<br>
소요시간 : 2시간 40분

#### | 기능구현
1. enter 또는 + 버튼키를 이용해 투두리스트 추가하기<br>
2. 추가되어 있는 리스트의 휴지통을 클릭하면 리스트 삭제<br>
<br>

#### | 막혔던 부분
1. 해당 투두리스트 코드는 `<div class="ToDoList">`라는 큰 틀 안에<br>
세 개의 section으로 이루어져있다.<br>
세 section은 `title, inner, bottom`으로 클래스 이름을 정의했다.<br>
각각의 section의 너비의 길이에서 약간의 차이가 나서 무엇이 문제인지 헤매다가<br>
개발자도구의 computed를 보고 해결했다.<br><br>
원인은 section들 중 어떤 것은 border를 지정하고 어떤 것은 안했던 것이다.<br>
border도 영역을 차지한다는 것을 깜빡한 탓에 벌어졌던 해프닝이었다 :sweat_smile: 찾아서 다행..<br><br>

2. 추가되어있는 리스트를 삭제하기 위해 휴지통 이미지를 눌렀을 때<br> 
mouse로 클릭한 부분의 element가 어떤 것인지 확인하고 싶었다.<br>
event.target을 이용해 아주 쉽게 구현할 수 있는 것이었다.<br>
console.log로 찍어보니 내가 어떤 element를 눌렀는지 태그까지 깔끔하게 나왔다.<br>
`event.target.className`을 이용해 휴지통을 클릭했을 때만 삭제기능이 동작하도록 구현했다.<br>

