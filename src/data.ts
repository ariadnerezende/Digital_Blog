class Post{
    constructor(public id: number, public title: string, public imageUrl: string, public body: string){

    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.body = body;
    }
}

 class PostDetails{
    constructor(public id: number, public postId: number, public email: string, public body: string){

    this.id = id;
    this.postId = postId;
    this.email = email;
    this.body = body;
    }
}