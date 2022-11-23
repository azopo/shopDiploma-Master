<template>
  <div class="container flex flex-col">
    <div class="flex justify-between">
      <div class="flex flex-col pb-ad-[30]">
        <div
          class="flex flex-col justify-between h-ad-[300] mb-ad-[30] p-ad-[20] h-ad-[300]"
        >
          <p class="text-primary-1 text-ad-[26]">Покупець</p>
          <input
            placeholder="ПІБ"
            class="border p-ad-[10] text-primary-1 rounded text-ad-[18]"
          />
          <input
            placeholder="Номер телефону"
            class="border p-ad-[10] text-primary-1 rounded text-ad-[18]"
          />
          <input
            placeholder="Електронна пошта"
            class="border p-ad-[10] text-primary-1 rounded text-ad-[18]"
          />
        </div>

        <div
          class="p-ad-[20] h-ad-[300] flex flex-col justify-between mb-ad-[30]"
        >
          <p class="text-primary-1 text-ad-[26]">Спосіб доставки</p>
          <div class="flex items-center">
            <input
              id="self"
              class="mr-ad-[10]"
              type="radio"
              name="post"
              value="self"
            />
            <label class="text-primary-1 text-ad-[20]" for="self"
              >Самовивіз (можлива передплата, уточнюйте у операторів
              колл-центру)</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="post"
              class="mr-ad-[10]"
              type="radio"
              name="post"
              value="post"
            />
            <label class="text-primary-1 text-ad-[20]" for="post"
              >Нова Пошта</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="courier"
              class="mr-ad-[10]"
              type="radio"
              name="post"
              value="courier"
            />
            <label class="text-primary-1 text-ad-[20]" for="courier"
              >Доставка кур'єром «Нова пошта»</label
            >
          </div>
        </div>
        <div class="p-ad-[20] h-ad-[300] flex flex-col justify-between">
          <p class="text-primary-1 text-ad-[26]">Спосіб оплати</p>
          <div class="flex items-center">
            <input
              id="card"
              class="mr-ad-[10]"
              type="radio"
              name="pay"
              value="card"
            />
            <label class="text-primary-1 text-ad-[20]" for="card"
              >Карткою онлайн ( +3% комісія банку )</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="cash"
              class="mr-ad-[10]"
              type="radio"
              name="pay"
              value="cash"
            />
            <label class="text-primary-1 text-ad-[20]" for="cash"
              >Оплатити при отриманні (Деякі товари відправляються після повної
              передплати, уточнюйте у операторів контакт-центру)</label
            >
          </div>
        </div>
      </div>
      <div
        class="border-l ml-ad-[40] p-ad-[30] h-ad-[500] flex flex-col items-center justify-center"
      >
        <p class="text-primary-1 text-ad-[26] self-start mb-ad-[30]">
          Ваше замовлення
        </p>

        <div class="flex">
          <div class="h-full w-ad-[500]">
            <nuxt-img
              alt="logo"
              class="w-[100%] h-[100%] object-cover object-center"
              preset="image"
              src="/1.jpg"
            />
          </div>
          <div>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">12 місяців</p>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">
              Смартфон Xiaomi Redmi Note 11 6/128GB Graphite Gray
            </p>
            <p class="text-primary-1 text-ad-[18] mb-ad-[20]">
              Всього до сплати <span class="font-semibold"> 8777 грн</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="self-center bg-primary-0 text-light-0 rounded w-ad-[400] h-ad-[50] uppercase text-ad-[20] font-semibold transition-all hover:bg-primary-1 hover:text-light-1 mt-ad-[50]"
    >
      Підтверджую замовлення
    </button>
  </div>
</template>
