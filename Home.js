import Font_View from './Font_View.js';
import Food_Items from './Food_Items.js';
function Home(){
    return(<>
       <div className="home">
        <Font_View src={["https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-breakfast-croissant-gourmet-meat-cuisine-delicious-bistro-dining-brunch-benedict-french-food-full-breakfast-592159.jpg","https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-breakfast-croissant-gourmet-meat-cuisine-delicious-bistro-dining-brunch-benedict-french-food-full-breakfast-592159.jpg","https://tse2.mm.bing.net/th?id=OIP.W4UZllNlI8vnK2s-M2ZAOgHaF6&pid=Api&P=0&h=180","https://g.foolcdn.com/editorial/images/539317/chef-food-service-us-foods-getty.jpeg"]}/>
        <Food_Items/>
       </div>
    </>);
}
export default Home;