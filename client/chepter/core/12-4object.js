/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
    total: 0, //최종 값을 담을 total
    date: '2023. 12. 06',
    tableIndex: 5,
    menu: [
      { name: '통 새우 돈까스', price: 13000, count: 2 },
      { name: '치즈 돈까스', price: 10000, count: 1 },
    ],
    totalPrice() {
        this.total = this.menu.reduce((acc, cur) => {
            return acc + (cur.price * cur.count);
        }, 0)
        return this.total; // 계산된 값을 this의 total 프로퍼티로 내보냄
    }
  };
  
  shopOrder.totalPrice();
  console.log(shopOrder.total);
//forEach를 사용해서 모든 메뉴의 총 금액

/* let total = 0;
shopOrder.menu.forEach((menu) => {
    total += menu.price * menu.count;
});

console.log(total);


const result = shopOrder.menu.reduce((acc,cur) => {
    return acc += (cur.price * cur.count);
},0)
console.log(result);
 */










console.clear();




  
  // 메서드와 this 
  // ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
  // ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
  //   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
  //   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
  //   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
  //   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.
  
  
  // 메서드 단축 구문
  
  
  // 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this
  
  const navigationMenu = {
    name: '글로벌 내비게이션',
    items: [
      { id: 'link-g', text: 'Google', link: 'https://google.com' },
      { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
    ],
    getItem(index) { //concise 메소드의 this는 호출을 한 대상
      return this.items[index];
    },
    addItem: function(newItem) { //arrow function의 메소드는 this를 가지지 않기 떄문에 window
      this.items.push(newItem);
    },
  };

  // 전달될 프로퍼티들의 이름이 변경되지 않도록 typeScript로 강제한다. 
  navigationMenu.addIem ({
    id: 'link-l',
    text: 'lycos',
    link: 'http://lycos.co.kr'
  })