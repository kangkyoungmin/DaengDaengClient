<template>
  <div id="trade">
    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">
      <!-- Page Content-->
      <!-- Register page -->
      <section class="main">
        <div class="container padding-bottom-3x mb-1">
          <div class="subject">상품등록</div>
          <hr class="barrier" />
          <div class="image">
            <div class="image-title font-title">
              상품이미지
              <span class="asterisk">*</span>
              <span>(0/6)</span>
            </div>
            <div
              class="image-image inputbox"
              style="background: url('./img/img_register.png')"
            >
              <input
                class="image-image inputbox"
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple
                style="opacity: 0"
                v-on:change="changeImage"
              />
                  <img ref="uploadItemImage" />
            </div>

            <div class="image-description">
              <div class="image-dscription-contents">
                * 상품 이미지는 640x640에 최적화 되어 있습니다.
              </div>
              <div class="image-dscription-contents">
                - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
              </div>
              <div class="image-dscription-contents">
                - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
              </div>
              <div class="image-dscription-contents">
                - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
              </div>
              <div class="image-dscription-contents">
                - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
              </div>
              <div class="image-dscription-contents">
                - 최대 지원 사이즈인 640 X 640 으로 리사이즈 해서
                올려주세요.(개당 이미지 최대 10M)
              </div>
            </div>
          </div>
          <hr />
          <div class="name">
            <div class="name-title font-title" >
              상품명
              <span class="asterisk">*</span>
            </div>
            <input
              class="name-input form-control inputbox"
			  v-model="title"
              placeholder="제목을 입력해주세요"
            />
          </div>
          <hr />
          <div class="category">
            <div class="category-title font-title">
              카테고리
              <span class="asterisk">*</span>
            </div>
            <div class="category-input">
              <div class="category-input-item">
                <ul class="category-list scroll-container">
                  <li
                    style="
                      margin: 0 auto;
                      width: 80%;
                      color: white;
                      background-color: rgb(13, 169, 239);
                    "
                  >
                    대분류
                  </li>
                  <li><button @click="big1">대형견</button></li>
                  <li><button @click="big2">중형견</button></li>
                  <li><button @click="big3">소형견</button></li>
                </ul>
              </div>
              <div class="category-input-item">
                <ul class="category-list scroll-container">
                  <li
                    style="
                      margin: 0 auto;
                      width: 80%;
                      color: white;
                      background-color: rgb(13, 169, 239);
                    "
                  >
                    중분류
                  </li>
                  <li><button  @click="mid1">배변용품</button></li>
                  <li><button  @click="mid2">사료</button></li>
                  <li><button  @click="mid3">악세서리</button></li>
                  <li><button  @click="mid4">의류</button></li>
                  <li><button  @click="mid5">기타</button></li>
                </ul>
              </div>
            </div>
          </div>

          <hr />
          <div class="price">
            <div class="price-title font-title">
              가격
              <span class="asterisk">*</span>
            </div>
            <input
              class="price-input form-control inputbox"
			  v-model="price"
              placeholder="상품 가격을 입력해주세요"
            />
            <div class="price-input-checkbox">
              <input type="checkbox" />
              <span>가격 협의 가능</span>
            </div>
          </div>
          <hr />

          <div class="description">
            <div class="description-title font-title">
              설명
              <span class="asterisk">*</span>
            </div>

            <textarea
              class="description-input inputbox"
              placeholder="상품 설명을 입력해주세요"
			  v-model="description"
            ></textarea>
            <div class="description-count">0/2000</div>
          </div>

          <div class="regist">
            <div class="register_title"></div>
            <div class="regist_container">
              <button type="button" class="btn btn-primary form-control" @click="goodsAdd">
                등록하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products Carousel-->
      <section class="container padding-top-3x padding-bottom-3x">
        <h3 class="text-center mb-30">상품</h3>
        <div
          class="owl-carousel"
          data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
        >
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <div class="product-badge text-danger">22% Off</div>
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/09.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Rocket Dog</a>
              </h3>
              <h4 class="product-price"><del>$44.95</del>$34.99</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <div class="rating-stars">
                <i class="icon-star filled"></i><i class="icon-star filled"></i
                ><i class="icon-star filled"></i><i class="icon-star filled"></i
                ><i class="icon-star"></i>
              </div>
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/03.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Oakley Kickback</a>
              </h3>
              <h4 class="product-price">$155.00</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/12.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Vented Straw Fedora</a>
              </h3>
              <h4 class="product-price">$49.50</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <div class="rating-stars">
                <i class="icon-star filled"></i><i class="icon-star filled"></i
                ><i class="icon-star filled"></i><i class="icon-star filled"></i
                ><i class="icon-star filled"></i>
              </div>
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/11.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Top-Sider Fathom</a>
              </h3>
              <h4 class="product-price">$90.00</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/04.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Waist Leather Belt</a>
              </h3>
              <h4 class="product-price">$47.00</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <div class="product-badge text-danger">50% Off</div>
              <a class="product-thumb" href="shop-single.html"
                ><img src="img/shop/products/01.jpg" alt="Product"
              /></a>
              <h3 class="product-title">
                <a href="shop-single.html">Unionbay Park</a>
              </h3>
              <h4 class="product-price"><del>$99.99</del>$49.99</h4>
              <div class="product-buttons">
                <button
                  class="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title="Whishlist"
                >
                  <i class="icon-heart"></i>
                </button>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-toast
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="successfuly added to cart!"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.offcanvas-wrapper {
  z-index: 1;
}
</style>

<script>
import { InsertGoods,getGoodsDetail,getUserInfo } from '../api/Goods';

export default({
	data: () => ({
		num:0,
		title:'',
		categoryBig:'',
		categoryMid:'',
		price:0,
		description:'',
		hit:0,
		negoStatus:'',
		createdAt:'',
		sellerId:0,
		itemStatus:'',
		updatedAt:'',
		buyerId:0,
		si:'',
		gu:'',
	}),

	methods:{
		changeImage(event){
			let image=event.target
			if(image.files[0]){ 
				this.$nextTick(()=>{
					let itemImage = this.$refs.uploadItemImage;//img dom 접근
					itemImage.src = window.URL.createObjectURL(image.files[0]);//img src에 blob주소 변환 
					this.itemImageInfo.uploadImages = itemImage.src; //이미지 주소 data 변수에 바인딩해서 나타내게 처리 
					itemImage.width ='640'; // 이미지 넓이 
					itemImage.height='640';
					itemImage.onload = () => { 
						window.URL.revokeObjectURL(this.src) //나중에 반드시 해제해주어야 메모리 누수가 안생김. 
					}
					this.num+=1
				})
				// this.productImage[num] = window.URL.createObjectURL(image.files[0]);//img src에 blob주소 변환

			}
		},
		async goodsAdd(){
			let item_id=parseInt(Math.random()*1000);
			this.itemStatus="no";
			this.createdAt=new Date();
			try{
				const responseUser=await getUserInfo(this.$store.state.auth.id);
				this.sellerId=responseUser.data.sellerId;
				this.si=responseUser.data.si;
				this.gu=responseUser.data.gu;
				this.negoStatus="no";
			} catch(error){
				alert(error)
			}
			let jsonGoods={"item_id":item_id,      
            "category_mid_id":this.categoryMid, 
            "title":this.title,
            "price":this.price,          
            "description":this.description,
            "hit":0,            
            "nego_status":"no",
            "created_at":this.createdAt,
            "seller_id":this.sellerId,
            "item_status":"no",   
            "updated_at":0,
            "buyer_id":0,
            "si":this.si,   
            "gu":this.gu }
			// item_id가 들어가 있는지에 대한 중복 유효성 체크
			const getGoodsResponse=await getGoodsDetail(item_id)
			if(getGoodsResponse.data.length>0){
				alert("이미 추가하셨습니다")
			}
			else{
				console.log(jsonGoods)
				try{
					await InsertGoods(jsonGoods);
					alert("추가되었습니다");
				} catch(error){
					alert(error)
				}
			}	
		},
		big1(){
			this.categoryBig="대형견"
		},
		big2(){
			this.categoryBig="중형견"
		},
		big3(){
			this.categoryBig="소형견"
		},
		mid1(){
			this.categoryMid="배변용품"
		},
		mid2(){
			this.categoryMid="사료"
		},
		mid3(){
			this.categoryMid="악세서리"
		},
		mid4(){
			this.categoryMid="의류"
		},
		mid5(){
			this.categoryMid="기타"
		},
	}
})
</script>

