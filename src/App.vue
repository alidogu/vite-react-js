<script setup>
import { ref, shallowRef, inject } from "vue"
import { storeToRefs } from 'pinia'
//const $gridStore = inject('$gridStore')

//const GridStore = $gridStore.useGridStore()

//const { GridData, GridColumns } = storeToRefs(GridStore)

const refffffff = ref()

let data = ref([{ "SumCostPrice": 637.56, "SumSellPrice": 719.7797, "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": 849.34, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null },
{ "SumCostPrice": 622.56, "SumSellPrice": 722.7797, "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": 849.34, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null }])

let columns = ref([{
  "Id": 344, "PageId": 1, "PageDetailId": 56, "sort": 1, "isactive": true, "readonly": true, "insert": false, "edit": false, "required": true, "title": "Kayıt No", "name": "Id", "type": "button", buttontitle:"#", "autocomplete": false, "align": "left", "width": 40, "id": "Id", "icon": "sort-desc", Clicked: function (data) {
    console.log('btn', data)
  }
}, { "Id": 345, "PageId": 1, "PageDetailId": 56, "sort": 2, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "Gerçek mi?", "name": "IsReal", "type": "checkbox", "source": [{ "label": "EVET", "value": "true" }, { "label": "HAYIR", "value": "false" }], "autocomplete": false, "align": "left", "width": 50, "id": "IsReal"  }, { "Id": 346, "PageId": 1, "PageDetailId": 56, "sort": 3, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "Sipariş No", "name": "OrderNumber", "type": "text", "autocomplete": false, "align": "left", "width": 150, "id": "OrderNumber", "icon": "sort-desc" }, { "Id": 348, "PageId": 1, "PageDetailId": 56, "sort": 4, "isactive": true, "readonly": false, "insert": false, "edit": false, "required": true, "title": "Müşteri", "name": "CustomerId", "type": "dropdown", "source": [{ "label": "deneme deneme", "value": 1 }, { "label": "Talha Toprak", "value": 2 }, { "label": "Tarık2 Çekirge", "value": 3 }, { "label": "Tarık Çekirge", "value": 4 }, { "label": "Tarık Çekirge", "value": 5 }, { "label": "HdQjomTNu WxdvtcghBwpKODX", "value": 6 }, { "label": "Mert Delibalta", "value": 7 }, { "label": "talha-1 toprak", "value": 8 }, { "label": "BJhsXONLpHzGZlkY ogLUYrpTRZAOzlXK", "value": 9 }, { "label": "doğan kesici", "value": 10 }, { "label": "Okay Türkmen", "value": 15742 }], "autocomplete": true, "align": "left", "width": 150, "id": "CustomerId", "icon": "sort-desc" }, { "Id": 349, "PageId": 1, "PageDetailId": 56, "sort": 5, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "Paraşüt Link", "name": "ParasutInvoiceUrl", "type": "text", "autocomplete": false, "align": "left", "width": 130, "id": "ParasutInvoiceUrl", "icon": "sort-desc" }, { "Id": 350, "PageId": 1, "PageDetailId": 56, "sort": 6, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "İptal mi?", "name": "IsCancelled", "type": "checkbox", "source": [{ "label": "EVET", "value": "true" }, { "label": "HAYIR", "value": "false" }], "autocomplete": false, "align": "left", "width": 110, "id": "IsCancelled", "icon": "sort-desc" }, { "Id": 351, "PageId": 1, "PageDetailId": 56, "sort": 7, "isactive": true, "readonly": false, "insert": false, "edit": false, "required": true, "title": "Opencart Durumu", "name": "OpenCartStatus", "type": "text", "autocomplete": false, "align": "left", "width": 130, "id": "OpenCartStatus", "icon": "sort-desc" }, { "Id": 354, "PageId": 1, "PageDetailId": 56, "sort": 8, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "Sipariş Tarihi", "name": "OrderDate", "type": "date", "autocomplete": false, "align": "left", "width": 110, "id": "OrderDate", "icon": "sort-desc" }, { "Id": 352, "PageId": 1, "PageDetailId": 56, "sort": 9, "isactive": true, "readonly": false, "insert": true, "edit": true, "required": true, "title": "Market", "name": "MarketId", "type": "dropdown", "source": [{ "label": "Trendyol", "value": 1 }, { "label": "Ticimax", "value": 2 }, { "label": "N11", "value": 3 }, { "label": "GittiGidiyor", "value": 4 }, { "label": "EPttAvm", "value": 5 }, { "label": "Hepsiburada", "value": 6 }, { "label": "Akakçe KS", "value": 7 }, { "label": "Amazon", "value": 8 }, { "label": "OpenCart", "value": 9 }, { "label": "GoogleADS", "value": 10 }, { "label": "ÇiçekSepeti", "value": 11 }, { "label": "Pazarama", "value": 12 }], "autocomplete": false, "align": "left", "width": 130, "id": "MarketId", "icon": "sort-desc" }, { "Id": 353, "PageId": 1, "PageDetailId": 56, "sort": 10, "isactive": true, "readonly": false, "insert": false, "edit": true, "required": true, "title": "Toplam", "name": "Total", "type": "money", "autocomplete": false, "align": "left", "width": 110, "id": "Total", "icon": "sort-desc" }, { "Id": 576, "PageId": 1, "PageDetailId": 56, "sort": 10, "isactive": true, "readonly": false, "insert": false, "edit": false, "required": true, "title": "Kdv'siz Alış", "name": "SumCostPrice", "type": "number", "autocomplete": false, "align": "left", "width": 130, "id": "SumCostPrice", "icon": "sort-desc" }, { "Id": 577, "PageId": 1, "PageDetailId": 56, "sort": 10, "isactive": true, "readonly": false, "insert": false, "edit": false, "required": true, "title": "Kdv'siz Satış", "name": "SumSellPrice", "type": "number", "autocomplete": false, "align": "left", "width": 130, "id": "SumSellPrice", "icon": "sort-desc" }, { "Id": 578, "PageId": 1, "PageDetailId": 56, "sort": 10, "isactive": true, "readonly": false, "insert": false, "edit": false, "required": true, "title": "Kdv'siz Brüt Kar", "name": "SumProfit", "type": "money", "autocomplete": false, "align": "left", "width": 150, "id": "SumProfit", "icon": "sort-desc" }])
const Update = (e) => {
  console.log("Update VUE", e);
};
const ttt = ref(1)

const UpdateData = () => {
  
  ttt.value=ttt.value++
  let total = ttt.value++
 // console.log('refffffff',refffffff,'total',total,ttt.value)
  let dataUp =  [{ "SumCostPrice": 637.56, "SumSellPrice": '719.77,97', "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": total, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null },
    { "SumCostPrice": total + 22, "SumSellPrice": total +2, "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": total + 22, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null },
  { "SumCostPrice": total + 33, "SumSellPrice": 755, "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": total + 66, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null }]
  
      settings.value.test1 = 'b' + Math.random() * (99 - 1) + 1;
      refffffff.value.updatedata(dataUp)
}
 
const Sirala = (cell, event) => {
  //columns.value[0].icon = columns.value[0].icon == 'sort-asc' ? 'sort-desc' : 'sort-asc'
  //console.log("Update VUE", data.value);
  let total = ttt.value++
  data.value = [{ "SumCostPrice": 222.56, "SumSellPrice": 719.7797, "SumProfit": 82.2197, "OrderId": 9210, "Id": 9210, "OrderNumber": "EM202110260", "IsReal": true, "IsCancelled": false, "OrderStatusId": 2, "OpenCartStatusId": 2, "OpenCartStatus": "Hazırlanıyor", "CustomerId": 15742, "CustomerGroupId": 1, "Total": total, "Discount": 0, "Shipping": 0, "Percentage": 42.47, "PercentageWithTax": 0, "CargoCost": 0, "CargoCostWithTax": 0, "Profit": 0, "ProfitWithTax": 0, "CostPrice": 0, "PriceTotal": 0, "PriceTotalWithTax": 0, "CostPriceWithTax": 0, "CompanyName": "", "DeliveryAddressId": null, "DeliveryTc": "", "DeliveryAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "DeliveryTitle": "", "DeliveryTaxOffice": null, "DeliveryTaxNo": null, "DeliveryPhone": "05325200145", "DeliveryTown": "Osmangazi", "DeliveryCity": "Bursa", "InvoiceAddressId": null, "InvoiceTc": "", "InvoiceAddress": "Çekirge mh. 1. Mercan sk. N:9 C/Blok D:3 Osmangazi/Bursa", "InvoiceTitle": "", "InvoiceTaxOffice": null, "InvoiceTaxNo": null, "InvoicePhone": "05325200145", "InvoiceTown": "Osmangazi", "InvoiceCity": "Bursa", "ParasutInvoiceUrl": "https://uygulama.parasut.com/", "Phone": "05325200145", "OrderDate": "01-01-2023 02:36", "History": null, "MarketId": 9, "OpenCartId": 10260, "CreationTime": "01-01-2023 02:36", "LastModificationTime": "01-01-2023 02:37", "CustomerAddressId": null, "CreationUserId": null, "LastModifiedUserId": null }]

}



const Clicked = (cell, event) => {
  // console.log("Clicked VUE", cell, event);

}

const HeaderClicked = (cell, event) => {
  console.log("HeaderClicked VUE", cell, event);
  let title = columns.value[cell[0]]

  // console.log("title", title)
}

const Selected = (SelectedIndex) => {
  console.log("Selected VUE", SelectedIndex);

}
const settings = ref({
  rowHeight: 20,
  width: 1500,
  freezeColumns : 0
})
const Theme = ref({
  bgCell: "#F2F9FF",
})

const ThemeOverride = (row) => {
  // console.log("ThemeOverride row", row)
  if (row === 1) {
    return {
      bgCell: '#93c47d',
    }
  }
  return undefined;
}


</script>
  
<template>
  <div
    style="border-radius: 9px;box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.4); height: 500px; width: 1800px;">

    <button @click="Sirala">sırala</button><button @click="UpdateData">güncelle</button> 
    app: {{ data[0].Total }}
    <ReactGrid ref="refffffff" :columns="columns" :update="Update" :theme="Theme" :clicked="Clicked"
      :headerclicked="HeaderClicked" :selected="Selected" :settings="settings" :themeoverride="ThemeOverride" />
  </div>
</template>
   