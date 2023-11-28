# MUJI 사이트 클론


📌[MUJI 주소](https://www.mujikorea.net/display/displayShop.lecs?storeNo=1&siteNo=13013&displayNo=MJ1C98&displayMallNo=MJ1)


📌[프로젝트 주소](https://zojo24.github.io/)


### 프로젝트 기간: 2023.11.20 ~ 2023.11.23


이번 프로젝트는 HTML/CSS를 주로 사용하여 섹션을 나누고 배운 기능들을 활용해보는데 집중했습니다. 
기본적으로 깔끔한 레이아웃에 `hover`, `position: absolute`, `grid` 를 간단하게 사용해볼 수 있을 것 같아 선택하게 되었습니다.


처음해보는 클론 과제로 큰 구조를 잡고 레이아웃을 정리하는 것이 어렵고 시간이 많이 소요되었습니다. 
클래스 태그들을 빈번하게 수정하다보니 오타도 많이 발생하고 HTML에서 구조도 쉽게 틀어졌습니다. 
앞으로는 먼저 큰 구조를 정리한 후에 레이아웃을 잡으면 시간을 더 효율적으로 써볼 수 있을 것 같습니다. 

추후에 JS를 공부하고 나서 다양한 JS library를 활용하여 웹사이트를 조금 더 동적으로 구현해내고 싶습니다.


**참고사항:** 
- 11/23일 홈페이지 레이아웃 기준으로 최종 수정하였기 때문에 추후에 이벤트 내용이나 이미지 일부가 실제 MUJI사이트와 다를 수 있습니다. 
- 모든 링크는 연결이 되어있어서 해당 페이지로 넘어갈 수 있으나 검색 기능은 구현하지 않아 작동하지 않습니다.  


## 주로 사용된 기능:
### HEADER 
Top과 Bottom으로 구조를 나누고 `flex`를 사용하여 logo, icon, input를 배치하였습니다.

Bottom 부분에 있는 메인 메뉴의 경우 `position: relative`와`position: absolute`를 사용하여 'NEW' 글자와 붉은 버튼을 메뉴 위에 위치시켰습니다. 

`hover`를 사용하여 마우스 포인터가 텍스트에 올라갔을 때 해당 영역에 밑줄이 그어져 강조되는 효과를 주었습니다. 

![Header main menu](https://velog.velcdn.com/images/zojo24/post/fe9d6208-54b4-48c9-bb55-7b99cc39a5ba/image.png)


----------

### ASIDE 
사이트 왼쪽에 위치한 사이드 메뉴는 side\__menu와 menu\__sub으로 구조를 나눴습니다. 

`hover` 기능을 활용하여 마우스 포인터가 side\__menu에 있는 텍스트에 올라가면 menu\__sub가 열릴 수 있도록 하였습니다. 
이때 z-index를 추가하여 menu\__sub가 main 섹션에 위치한 `swiper` 위에 위치할 수 있도록 설정하였습니다.

menu\__sub에도 마찬가지로 `hover`를 사용하여 마우스 포인터가 텍스트 위에 위치하면 해당 텍스트에 밑줄이 생기도록 하였습니다.

![Aside side menu](https://velog.velcdn.com/images/zojo24/post/dd0fb8e2-7b0e-4179-91b9-3683678f8237/image.png)

----------

### MAIN
카테고리 별로 구역을 설정하여 작업하였습니다. 주로 사용된 기능은 `swiper`와 `flex`입니다.

`swiper`를 사용하여 여러 슬라이드가 자동으로 보이거나 버튼을 눌러 넘겨 볼 수 있도록 설정하였습니다. 

CSS에서 `swiper-button`과 `swiper-pagination-bullet`에 별도의 스타일을 추가하였습니다. 

![Main 페이지-Swiper](https://velog.velcdn.com/images/zojo24/post/336b5715-4767-491f-99d3-23878c0780bf/image.png)

![Main 신상품-Swiper](https://velog.velcdn.com/images/zojo24/post/0f3ab339-e634-48c7-8d9f-2d2951b58348/image.png)

`flex`를 사용하여 여러 요소들을 깔끔하게 정리하고자 했습니다.

![Main 기획전-Flex](https://velog.velcdn.com/images/zojo24/post/14915f38-ea61-4ecb-969d-13be7209d8fb/image.png)

`flex`만으로도 가능한 부분이지만  `grid`도 간단하게라도 구현해보고 싶어서 추가하게 되었습니다.


![Main 서비스안내-Grid](https://velog.velcdn.com/images/zojo24/post/d0d3b70a-5861-4b84-94ed-7e4712656c34/image.png)



----------

### FOOTER
간단해보이지만 영역을 구분 짓고 레이아웃을 정리하는데 생각보다 시간이 걸렸던 부분입니다. 
footer\__top, inner (logo\__ area, content\__area)로 크게 나누었습니다. 

![Footer](https://velog.velcdn.com/images/zojo24/post/a20af70c-b05d-43a1-a599-ec064b06feb9/image.png)

----------



