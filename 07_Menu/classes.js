
class MenuItem {
    constructor (id, title, category, price, img_dir, desc) {
        this.id=id;
        this.title=title;
        this.category=category;
        this.price=price;
        this.img=img_dir;
        this.desc=desc;
    }

    get_id(){
        return this.id;
    }

    get_title(){
        return this.title;
    }
    get_category(){
        return this.category;
    }
    get_price(){
        return this.price;
    }
    get_img(){
        return this.img;
    }
    get
}