function existing_supplier_click(id) {

    jQuery.noConflict();
    $("#Existing_Supplier_Modal").hide('slow');
    var name = document.getElementById('supp1' + id);
    var address = document.getElementById('supp2' + id);
    var postcode = document.getElementById('supp3' + id);
    var email = document.getElementById('supp4' + id);
    var phone = document.getElementById('supp5' + id);



    //var balance = document.getElementById('supp6' + id);
    //var credit = document.getElementById('supp7' + id);
    //var credit_limit = document.getElementById('supp8' + id);
    //var type1 = type_id;

    //var balance1 = balance.innerHTML;
    //var credit1 = credit.innerHTML;
    //var credit_limit1 = credit_limit.innerHTML;



    var name1 = name.innerHTML;
    var address1 = address.innerHTML;
    var postcode1 = postcode.innerHTML;
    var email1 = email.innerHTML;
    var phone1 = phone.innerHTML;

    $("#supplier_name").text(name1);
    $("#supplier_address").text(address1);
    $("#supplier_postcode").text(postcode1);
    $("#supplier_email").text(email1);
    $("#supplier_phone").text(phone1);

    $("#supplier_IDD").val(id);
}
