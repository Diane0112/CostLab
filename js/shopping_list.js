function createProductData() {
  const list = [
    {
      image: "image1.jpg",
      name: "아이배냇 한끼 영양밥 쇠고기시금치150g x 6",
      description:
        "영양 가득 소고기와 시금치로 맛있는 한 끼가 뚝딱 해결되고 국내산 원재료와 우리 콩 간장, 올리고당으로 더욱 맛있는 3세 이상 아이부터 어른까지 맛있게 드실 수 있는 한 끼 영양밥입니다.",
      price: 11900,
      category: "식료품",
    },
    {
      image: "image2.jpg",
      name: "동원 들깨 칼국수 258g x 4",
      description:
        "사골육수에 껍질을 제거한 들깨가루를 첨가한 부드러운 국물 맛의 들깨 칼국수입니다.",
      price: 11990,
      category: "식료품",
    },
    {
      image: "image3.jpg",
      name: "동원 양반 차돌 육개장 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 차돌 육개장입니다.",
      price: 12490,
      category: "식료품",
    },
    {
      image: "image4.jpg",
      name: "동원 양반 백합 미역국 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 백합미역국입니다.",
      price: 12490,
      category: "식료품",
    },
    {
      image: "image5.jpg",
      name: "동원 면발의신 해물칼국수 236g x 4",
      description:
        "멸치와 바지락으로 시원한 육수의 맛을 살린 해물칼국수입니다.",
      price: 13990,
      category: "식료품",
    },
    {
      image: "image6.webp",
      name: "Apple 맥북 에어 15",
      description:
        "놀랍도록 얇고 엄청나게 빠른 MacBook Air를 이제 두 가지 사이즈와 네 가지 컬러로 만나볼 수 있습니다. 당시에게 꼭 맞는 Air를 선택하세요.",
      price: "1,609,000원",
      category: "가전",
    },
    {
      image: "image7.webp",
      name: "삼성 QLED TV",
      description:
        "'공간과 잘 어우러지는 에어슬림 디자인' 첨단 기술을 담고도 얇고 슬립합니다. 덕분에 거실, 방 안 어디에 두어도 예술 작품처럼 공간에 조화롭게 어우러집니다.",
      price: "3,799,000원",
      category: "가전",
    },
    {
      image: "image8.webp",
      name: "엡손 잉크젯 복합기",
      description: "앱손 스마트 패널 앱을 통한 쉬운 연결, 다양한 활용",
      price: "233,900원",
      category: "가전",
    },
    {
      image: "image9.jpg",
      name: "엘지 오브제 더블매직스페이스 냉장고",
      description: "프리미엄 소재부터 컬러까지 어디에나 자연스럽게 아름답게",
      price: "3,449,000원",
      category: "가전",
    },
    {
      image: "image10.webp",
      name: "러셀 홉스 전자동 커피 머신",
      description: "원터치로 시작하는 홈 카페",
      price: "369,900원",
      category: "가전",
    },
  ];

  localStorage.setItem("productList", JSON.stringify(list));
}
createProductData();
const products = JSON.parse(localStorage.getItem("productList"));
