<template>
  <div class="l-container">
    <h1 class="commonpage">Доставка</h1>
    <div class="content">
      <div class="content_right_img">
        <img alt="Доставка" src="@/assets/images/delivery_img.jpg" loading="lazy" title="Доставка" />
      </div>
      <p>Компания Prime Wood организует доставку мебели в строго согласованные сроки.&nbsp;При заказе доставки товара без разгрузки мебель доставляется строго до подъезда заказчика.</p>
      <p>Внимание акция!</p>
      <p>
        <strong>При условии самовывоза &nbsp;предоставляется дополнительная скидка 3%!!!</strong>
      </p>
      <ul>
        <li>
          Товар со статусом
          <strong>"на складе"</strong> - в течении&nbsp;
          <strong>1-3 рабочих дней</strong> со дня поступления оплаты.
        </li>
        <li>
          Товар со статусом
          <strong>"на заказ"</strong> - в течении
          <strong>3-30 рабочих дней</strong> со дня поступления оплаты, в зависимости от фабрики производства.&nbsp;
        </li>
      </ul>
      <p>Заказчик – указанный ответственный сотрудник – обязан обеспечить в оговоренный промежуток времени встречу и беспрепятственный проезд транспорта к подъезду и свободный проход грузчиков на место доставки и сборки мебели, а также подготовить помещение, чтобы ничто не мешало сборке и установке мебели.</p>
      <ul>
        <li>Мы осуществляем доставку и сборку мебели в будние дни с 10:00 до 19:00.</li>
        <li>Доставка в более позднее время и в выходные дни возможна, но оговаривается дополнительно</li>
        <li>Мы осуществляем доставку по всей России</li>
        <li>В случае срыва доставки мебели по вине заказчика время повторной доставки определяет поставщик, доставка оплачивается заказчиком.</li>
        <li>Менеджеры компании рассчитывают по отдельному тарифу усложненные работы, такие как такелаж, разгрузка негабаритной мебели, сейфов и проч.</li>
        <li>В случае отсутствия товара на региональном складе самовывоза, может дополнительно взиматься стоимость перемещения с центрального склада.</li>
        <li>
          <strong>В&nbsp;случае отсутствия товара на региональном складе самовывоза, сроки доставки могут быть увеличены за счет перемещения с центрального склада г. Москвы.</strong>
        </li>
      </ul>
      <p></p>
      <p>
        <strong>Тарифы</strong>
      </p>
      <table style="width: 600px;" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td style="width: 200px; height: 25px;" valign="middle">
              <p align="center">&nbsp;Тип автомобиля</p>
            </td>
            <td style="width: 200px;" valign="middle">
              <p align="center">&nbsp;Доставка по городу</p>
            </td>
            <td style="width: 200px;" valign="middle">
              <p align="center">Доставка по области</p>
            </td>
          </tr>
          <tr>
            <td style="height: 15px;">
              <p align="center">До 3 м3 (длина &gt;160см)</p>
            </td>
            <td valign="middle">
              <p align="center">480руб.</p>
            </td>
            <td valign="middle">
              <p align="center">+30р за км.</p>
            </td>
          </tr>
          <tr>
            <td style="height: 15px;">
              <p align="center">От 3 до 5 м3</p>
            </td>
            <td valign="middle">
              <p align="center">1500руб.</p>
            </td>
            <td valign="middle">
              <p align="center">+30р за км.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content_right_img {
  float: right;
  margin: -50px 0 10px 10px;
}
.content {
  & p {
    line-height: 24px;
    margin: 0.8em 0.2em;
    font-size: 13px;
  }
  & li {
    list-style: disc;
    font-size: 13px;
  }
  & h2 {
    font-size: 17px;
    color: #595959;
    font-weight: 400;
  }
}
tr {
	border-top: 1px solid #dedede;
	&:last-child {
		border-bottom:  1px solid #dedede;
	}
}
</style>