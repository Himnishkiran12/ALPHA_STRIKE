var img = ["https://th.bing.com/th/id/OIP.hJDVGDQ9W8bts_c0gJuQLQHaHC?pid=ImgDet&rs=1", "https://media.istockphoto.com/vectors/young-father-and-babby-vector-id886668274?k=6&m=886668274&s=612x612&w=0&h=F6FuAsMmZYhX69GG_TkCaFDRr8OlFhYamf9w1NhUqYg=", "https://assets.onlinelabels.com/images/clip-art/oksmith/Choose%20me-305090.png", "https://th.bing.com/th/id/OIP.vCRIHRUCEQ1AjX3v91ntwgHaHa?pid=ImgDet&rs=1"];
var nam = ["My Family", "Shashikiran", "Himnishkiran[me]", "Ashwini Prabhu"];

var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 3
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = img[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = nam[i];
    console.log(updatedName);
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}