﻿function rowcounterPlus() {

    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = +number + +1;

    //alert("ADD" + document.getElementById('rowCounterrr').value)

}
function rowcounterMinus() {
    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = number - 1;
    //alert("CROSS" + document.getElementById('rowCounterrr').value)
}



function existing_supplier_click(id) {
    //alert("adadasdsada");


    var name = document.getElementById('suppliers1' + id);
    var address = document.getElementById('suppliers2' + id);
    var postcode = document.getElementById('suppliers3' + id);
    var email = document.getElementById('suppliers4' + id);
    var phone = document.getElementById('suppliers5' + id);
    //var supp_code = document.getElementById('supp6' + id);


    //var balance = document.getElementById('supp6' + id);
    //var credit = document.getElementById('supp7' + id);
    //var credit_limit = document.getElementById('supp8' + id);
    //var type1 = type_id;

    //var balance1 = balance.innerHTML;
    //var credit1 = credit.innerHTML;
    //var credit_limit1 = credit_limit.innerHTML;


    //alert("check1");
    var name1 = name.innerHTML;

    var address1 = address.innerHTML;
    var postcode1 = postcode.innerHTML;
    var email1 = email.innerHTML;
    var phone1 = phone.innerHTML;
    //var supp_code1 = supp_code.textContent;
    //            alert("GOOD" + name1);

    $("#supplier_names").text(name1);
    $("#supplier_addresss").text(address1);
    $("#supplier_postcodes").text(postcode1);
    $("#supplier_emails").text(email1);
    $("#supplier_phones").text(phone1);

    $("#supplier_IDD").val(id);
    //$("#supplier_codes").val(supp_code1);
    $("#Existing_Supplier_Modal").hide('slow');
}
function RemoveAddedRow(id) {
    $("#rowId" + id).closest(".remove_div").remove();
    rowcounterMinus();
}
function hhh() {
    jQuery.noConflict();
    $("#Sold_History_Modal").modal('show');
}
function addNewRow() {


    arguments.callee.myStaticVar = arguments.callee.myStaticVar || 2;
    var count = arguments.callee.myStaticVar++;
    document.getElementById("counters").value = count;
    //alert("new Row counter = "  + count);

    $.ajax({

        url: '/Purchase/AddNewRowPurchases/',
        data: { counter: count },
        type: "Get",
        cache: false,
        success: function (data) {


            var iddd = 'newrow' + count;

            document.getElementById('newrow' + count).innerHTML = data;

        }

    })
}
function tbody_add_record(id, count) {

    alert("tbody Counter =" + count);

    var sku = document.getElementById('partial_row1' + id);
    $("#invoice_product_id" + count).val(id);



    var sku_inner = sku.innerHTML;
    $("#codeforProduct" + count).val(sku_inner);

    var supplier_code = document.getElementById('partial_row2' + id);
    var supp_code = supplier_code.innerHTML;
    $("#supplier_code" + count).val(supp_code);


    var desc = document.getElementById('partial_row3' + id);
    var desc_inner = desc.innerHTML;
    $("#invoice_description" + count).val(desc_inner);

    var quantity = document.getElementById('partial_row4' + id);
    var quantity_inner = quantity.innerHTML;

    var price = document.getElementById('partial_row5' + id);
    var price_inner = price.innerHTML;
    $("#invoice_price" + count).val(price_inner);

    var percent_price = ((20 / 100)) * price_inner;
    total_price_with_vat = +percent_price + +price_inner;

    var a = total_price_with_vat.toFixed(2);

    $("#invoice_price_vat" + count).val(a);


    //alert("Price" + price_inner);
    $("#invoice_total" + count).val(price_inner);
    $("#invoice_total_vat" + count).val(total_price_with_vat);


    //alert("Price VALUE" + $("#invoice_total" + count).val());
    //document.getElementById("invoice_total" + count).value = price_inner;
    //document.getElementById("invoice_total_vat" + count).value = total_price_with_vat;

    $("#total_hidden" + count).val(price_inner);
    $("#total_vat_hidden" + count).val(total_price_with_vat);


    $("#invoice_quantity" + count).val("0");
    $("#invoice_receieved_quantity").val("0");
    $("#productList").hide();

    checkFilterSupplier(count);
    Total(count);




}
$(document).ready(function () {
    $('#kj').dataTable();
});
$('.add_new_row').click(function () {
    var i = 1;
    $('#maintable tr:last').after('<tr id="rowId" class="font-15  remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110" id="codeforProduct" name="yoyoyoyoyoyoyoy" onkeyup="productList(this.value)" type="text"></div></td><td class="border-right-td"><textarea class="description-text-area unbold width-100p" id="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"><input id="invoice_quantity" placeholder="0" class="unbold width-45" name="" type="text"></div></td><td class="border-right-td"><div class="text-center"><input id="invoice_price" placeholder="0.0" class="new-invoice-width-boxes unbold width-68" name="" type="text"></div></td><td class="border-right-td hidecolumn text-center"><input id="invoice_price_vat" placeholder="0.0" class="new-invoice-width-boxes unbold width-78" name="" type="text"></td><td class="text-center border-right-td width-68"><div id="invoice_total" class="total_invoice_background">£0</div></td><td class="border-right-td text-center width-78 hidecolumn"><div id="invoice_total_vat" class="total_invoice_background">£0</div></td><td class="border-right-td"><div class="text-center"><input id="invoice_discount" placeholder="0.0" class="unbold width-45" name="" type="text"></div></td><td class="text-center width-25p" style="vertical-align:middle;"><a href="#" class="add_new_row showdiv"><img src="/img/images/plus_new_sale.png"></a><a href="#" class="kashif" onclick="removeRow()"><img src="/img/images/cross_new_sale.png" style="margin-left:3px;"></a><a href="#"><img src="/img/images/barcode_new_sale.png" style="margin-left:4px;"></a><a href="#"><img src="/img/images/findpost.png" style="margin-left:4px"></a></td></tr>');
});
function PO__Status() {
    
    var selectedValue = document.getElementById("po_status").value;
    //alert(selectedValue);

    if (selectedValue == 1) {
        $(".received_div").hide();
    }

    else if (selectedValue == 2) {
        $(".received_div").hide();
    }

    else if (selectedValue == 3) {
        $(".received_div").show();
    }
}
function productList(char) {

    //alert("ENTER");
    //arguments.callee.counter = arguments.callee.counter || 1;
    //var productID = document.getElementById("invoice_product_id" + counter).value;
    
    //alert("Supplier ID" + Supplier_ID);

    var supplierID = document.getElementById("supplier_IDD").value;

    if (supplierID != null && supplierID != "") {

        var Count = document.getElementById("counters").value;
        if (Count == "") {
            Count = 1;
        }
        //alert("Product List Counter ="+  Count)

        if (document.getElementById("filter_supplier_checkbox").checked) {
            alert("CHECKED");
            $("#productList").show();
            $.ajax({

                url: '/Purchase/Filter_Supplier/',
                data: { supplierId: supplierID, counter: Count },
                cache: false,
                type: 'Get',
                success: function (data) {
                    alert("Success");
                    document.getElementById('productList').innerHTML = data;
                },
                error: function (response) {
                    alert(response + "ERROR Response");
                }
            })
        }


        else {
            $("#productList").show();

            $.ajax({
                url: '/Purchase/GetProducts/',
                data: { ch: char, counter: Count },
                cache: false,
                type: "Get",
                success: function (data) {

                    document.getElementById('productList').innerHTML = data;




                },
                error: function (response) {
                    alert(response + "JD ERROR");
                }
            })
        }
    }
    else {

        alert("Please Select Supplier First");
    }

}

function Total(rownum) {

    //alert("ROWCount Total " + document.getElementById('rowCounterrr').value);
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    

    var price = document.getElementById('invoice_price' + rownum).value;

    var price_vat = ((20 / 100)) * price;

    var priceVatTotal = +price + +price_vat;

    
    var total = quantity * price;

    

    var totalVat = quantity * priceVatTotal;


    //alert(priceVatTotal);
    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price_vat' + rownum).value = priceVatTotal;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    //alert("Total" + total);

    $("#total_hidden1").val(total);
    $("#total_vat_hidden1").val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();




    //var after_discount_total = total - discount_enter;
    //var after_discount_total_Vat = totalVat - discount_enter;

    //document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    //document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);

    //alert("alert total" + (document.getElementById('invoice_total' + rownum).value));

    var a = 0;
    var sum_received = 0;
    var size = rownum;
    //var size = document.getElementById('rowCounterrr').value;
    for (i = 1; i <= size; i++) {
        var totaaaal = document.getElementById('invoice_total' + i).value;
        a = +totaaaal + +a;

        //received_total

       
    }

    var a2 = a - 0;
    var a1 = a2.toFixed(2);

    $("#sub_total_td").html("£" + a1);
    
    var total_vat = (((20 / 100)) * a1).toFixed(2);


    var gross1 = (+a1 + +total_vat);

    var gross2 = gross1 - 0;
    var gross = gross2.toFixed(2);

    

    $("#vat_td").html(total_vat);
    $("#total_td").html(gross);

    $("#order_sub_total_hidden").val(a1);
    $("#order_vat_hidden").val(total_vat);
    $("#order_total_hidden").val(gross);

    //$("#received_sub_total_hidden").val(a1);
    //$("#received_vat_hidden").val(total_vat);
    //$("#received_total_hidden").val(gross);

   
    

    //alert("TOTAL ::" + document.getElementById('invoice_price_vat' + rownum).value);
}



function Total2(rownum) {
    //alert("TOTAL 2");
    //alert("ROWCount Total 2" + document.getElementById('rowCounterrr').value);
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = (5 / 6) * (priceVat);

    //alert("PRICE VAt" + priceVat);
    //alert("PRICE" + price);

    var total = quantity * price;
    
    var totalVat = quantity * priceVat;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price' + rownum).value = price;
    document.getElementById('invoice_price_vat' + rownum).value = priceVat;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

   
    //alert("TOTAL" + total);

    var a = 0;
    //var size = document.getElementById('rowCounterrr').value;
    var size = rownum;
    for (i = 1; i <= size; i++) {
        var totaaaal = document.getElementById('invoice_total' + i).value;
        a = +totaaaal + +a;
    }
    //alert("ALERT");

    var a2 = a - 0;
    var a1 = a2.toFixed(2);

    $("#sub_total_td").html("£" + a1);

    
    

    var total_vat = (((20 / 100)) * a1).toFixed(2);

    

    var gross1 = (+a1 + +total_vat);

    var gross2 = gross1 - 0;
    var gross = gross2.toFixed(2);
    //alert("VAT" + total_vat);
    //alert("Total" + gross);


    

    $("#vat_td").html(total_vat);
    $("#total_td").html(gross);


    $("#order_sub_total_hidden").val(a1);
    $("#order_vat_hidden").val(total_vat);
    $("#order_total_hidden").val(gross);

    //$("#received_sub_total_hidden").val(a1);
    //$("#received_vat_hidden").val(total_vat);
    //$("#received_total_hidden").val(gross);


}



function TotalReceived1(rownum) {
    //alert("RCVD");

    //alert("ROWCount TotalReceived1" + document.getElementById('rowCounterrr').value);
    var received_quantity = document.getElementById('invoice_receieved_quantity' + rownum).value;
    //alert("RCVD" + received_quantity);
    var price = document.getElementById('invoice_price' + rownum).value;
    //alert(price);



    var total = received_quantity * price;

    document.getElementById('received_total' + rownum).value = total;

    var a1 = 0;
    var a = a1.toFixed(2);
    var sum_received = a;
    //alert("SUM" + sum_received);
    //var size = document.getElementById('rowCounterrr').value;
    var size = rownum;
    for (i = 1; i <= size; i++) {
        var totaaaal = document.getElementById('received_total' + i).value;
        sum_received = +totaaaal + +sum_received;

        //received_total
    }

    var a = sum_received - 0;
    var total_sum = a.toFixed(2);

    //alert("SUM" + sum_received);

    $("#received_sub_total_td").html("£" + total_sum);


    var total_vat1 = (((20 / 100)) * total_sum);

    var total_vat2 = total_vat1 - 0;
    var total_vat = total_vat2.toFixed(2);

    var gross1 = +total_sum + +total_vat;

    var gross2 = gross1 - 0;

    var gross = gross2.toFixed(2);

    //alert("VAT:" + total_vat);
    //alert("Total" + gross);

    //alert("GLOBAL VALUE :" + global_discount);
    //var discounted = gross - global_discount;

    //alert("VAT" + total_vat);
    //alert("Total" + gross);

    $("#received_vat_td").html(total_vat);
    $("#received_total_td").html(gross);



  

    $("#received_sub_total_hidden").val(a);
    $("#received_vat_hidden").val(total_vat);
    $("#received_total_hidden").val(gross);


}




function TotalReceived2(rownum) {
    //alert("RCVD2");
    //alert("ROWCount TotalReceived2" + document.getElementById('rowCounterrr').value);
    var received_quantity = document.getElementById('invoice_receieved_quantity' + rownum).value;
    //alert("RCVD" + received_quantity);
    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = (5 / 6) * (priceVat);
    //alert(price);



    var total = received_quantity * price;

    document.getElementById('received_total' + rownum).value = total;

    var a = a1.toFixed(2);
    var sum_received = a;
    //alert("SUM" + sum_received);
    //var size = document.getElementById('rowCounterrr').value;
    var size = rownum;
    for (i = 1; i <= size; i++) {
        var totaaaal = document.getElementById('received_total' + i).value;
        sum_received = +totaaaal + +sum_received;

        //received_total
    }

    var a = sum_received - 0;
    var total_sum = a.toFixed(2);

    //alert("SUM" + sum_received);

    $("#received_sub_total_td").html("£" + total_sum);


    //alert("SUM" + sum_received);



    var total_vat1 = (((20 / 100)) * sum_received).toFixed(2);

    var total_vat2 = total_vat1 - 0;

    var total_vat = total_vat2.toFixed(2);

    

    var gross1 = +sum_received + +total_vat;

    var gross2 = gross1 - 0;

    var gross = gross2.toFixed(2);

    //alert("VAT:" + total_vat);
    //alert("Total" + gross);

    //alert("GLOBAL VALUE :" + global_discount);
    //var discounted = gross - global_discount;

    //alert("VAT" + total_vat);
    //alert("Total" + gross);

    $("#received_vat_td").html(total_vat);
    $("#received_total_td").html(gross);


    //$("#order_sub_total_hidden").val(a1);
    //$("#order_vat_hidden").val(total_vat);
    //$("#order_total_hidden").val(gross);

    $("#received_sub_total_hidden").val(a);
    $("#received_vat_hidden").val(total_vat);
    $("#received_total_hidden").val(gross);


}


function checkPurchaseNumber() {
    var number = document.getElementById("purchase_number").value;

    $.ajax({

        url: '/Purchase/PurchaseNumberValidation/',
        data: { invoice: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("purchase_number").value = "";
                alert("Invoice_number already exist !")
            }
        },
        error: function (response) {
            alert("invoice validation Error Occured");
        }


    })
}
function checkQuantityAvailable(quantiy, id) {

    var proID = document.getElementById('invoice_product_id' + id).value;

    $.ajax({

        url: '/Product/QuantityCheck/',
        data: { quantity: quantiy, productId: proID },
        cache: false,
        type: 'Get',
        success: function (data) {


            if (data == "False") {
                alert("Quantity Exceeded Limit");
                document.getElementById('invoice_quantity' + id).value = "";
            }

        },
        error: function (response) {
            alert(response);
        }


    })
}

function payment_piriority() {
    var value = $("#payment_piriority_id").val();

    if (value == 1) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 2) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 3) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 4) {
        $("#custom_date_show_invoice").hide();
    }
    else if (value == 5) {
        $("#custom_date_show_invoice").show();
    }
}

function payment_status() {
    
    //alert("ddsaadssaasd");
    var value=$("#payment_status_id").val();

    if (value == 1) {
        $("#payment_piriority_tr").hide();
        $("#partial_payment_option").hide();
    }

    else if (value == 2) {
        $("#payment_piriority_tr").show();
        $("#partial_payment_option").hide();
    }

    else if (value == 3) {
        //$("#Partial_Payment_Modal").modal("show");
        $("#payment_piriority_tr").show();
        $("#partial_payment_option").show();
        
    }
}
function Partial_Payment() {

    $(".partial_paid").show();
    $("#deposit_paid_tr").hide();
    $(".hide_border").show();

    //var discount = $("#discount_value").val();

    var gross = $("#order_total_hidden").val();

    var amount = $("#partial_amount").val();
    alert("Gross " + gross);
    var rem = gross - amount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("partial_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING" + remaining);//alert("REMAINING" + remaining);

}