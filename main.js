var productForm = document.getElementsByClassName('product__form')[0];
var addedHTML = `
	<div class="product__cart-add">
		<h3 class="product__cart-add__title">Build Your Kit & Save</h3>
		<h4 class="product__cart-add__subtitle">Spend $135, Save $15</h4>
		<img class="product__cart-add__progressbar" src="https://fv2-1.failiem.lv/thumb_show.php?i=qm39ee8ah&view" />
		<img class="product__cart-add__division" src="https://fv2-3.failiem.lv/down.php?i=nqeqx29gw&view" />
		<div class="product__cart-add__item">
			<img class="product__cart-add__item__image" src="https://fv2-2.failiem.lv/thumb_show.php?i=4xeudu5z2&view" />
			<div class="product__cart-add__item__description">
				<p>24/7™ Pima Cotton Plunge Bra</p>
				<p class="product__cart-add__item__description__2nd-text">Mulberry / 36D</p>
				<label class="product__cart-add__item__description__qty">Qty:</label>
				<div class="product__cart-add__item__description__qty-size">
					<div onclick="var qtyElement = document.getElementById('qty1'); var val = Number(qtyElement.innerText) - 1; val < 0 ? qtyElement.innerText = 0 : qtyElement.innerText = val;">-</div>
					<div id="qty1">1</div>
					<div onclick="var qtyElement = document.getElementById('qty1'); qtyElement.innerText = Number(qtyElement.innerText) + 1;">+</div>
					<div class="product__cart-add__item__description__price">$65.00</div>
				</div>
			</div>
		</div>
		<img class="product__cart-add__division" src="https://fv2-3.failiem.lv/down.php?i=nqeqx29gw&view" />
		<div class="product__cart-add__item">
			<img class="product__cart-add__item__image" src="https://fv2-3.failiem.lv/thumb_show.php?i=e9sgejd6t&view" />
			<div class="product__cart-add__item__description">
				<p>24/7™ Classic T-Shirt Bra</p>
				<p class="product__cart-add__item__description__2nd-text">Black / 36D</p>
				<label class="product__cart-add__item__description__qty">Qty:</label>
				<div class="product__cart-add__item__description__qty-size">
					<div id="subtractButton" onclick="var qtyElement = document.getElementById('qty2'); var val = Number(qtyElement.innerText) - 1; val < 0 ? qtyElement.innerText = 0 : qtyElement.innerText = val;">-</div>
					<div id="qty2">1</div>
					<div id="addButton" onclick="var qtyElement = document.getElementById('qty2'); qtyElement.innerText = Number(qtyElement.innerText) + 1;">+</div>
					<div class="product__cart-add__item__description__price">$65.00</div>
				</div>
			</div>
		</div>
		<img class="product__cart-add__division" src="https://fv2-3.failiem.lv/down.php?i=nqeqx29gw&view" />
		<div class="product__cart-add__subtotal">
			<p>Build Your Kit Subtotal</p>
			<p id="subtotal">$130.00</p>
		</div>
	</div>
`
productForm.insertAdjacentHTML('afterend', addedHTML);
var observer = new MutationObserver(mutationRecords => {
	var qty1 = Number(document.getElementById('qty1').innerText);
	var qty2 = Number(document.getElementById('qty2').innerText);
	var numFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
	document.getElementById('subtotal').innerText = numFormat.format(qty1 * 65 + qty2 * 65);
});

// observe everything except attributes
observer.observe(document.getElementById('qty1'), {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true // pass old data to callback
});

observer.observe(document.getElementById('qty2'), {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true // pass old data to callback
});
