<template>
  <div class="container">
    <p class="text-primary-1 text-ad-[26] font-semibold mb-ad-[40]">
      Смартфон Xiaomi Redmi Note 11 6/128GB Graphite Gray
    </p>
    <div class="flex justify-between">
      <div class="h-full w-ad-[500]">
        <nuxt-img
          alt="logo"
          class="w-[100%] h-[100%] object-cover object-center"
          preset="image"
          src="/1.jpg"
        />
      </div>
      <div
        class="w-ad-[500] p-ad-[20] border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center"
      >
        <div>
          <p class="text-success-1 text-ad-[14] mb-ad-[10]">В наявності</p>
          <p class="text-primary-1 text-ad-[18] mb-ad-[10]">2999грн</p>
          <label for="guarantee" class="text-primary-1 text-ad-[16]"
            >Гарантія</label
          >
          <select
            id="guarantee"
            class="text-primary-1 block text-ad-[16] w-ad-[150] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-ad-[5]"
          >
            <option value="6">6 місяців</option>
            <option value="12">12 місяців</option>
          </select>
        </div>
        <button
          class="bg-primary-0 text-light-0 rounded w-ad-[200] h-ad-[50] uppercase text-ad-[20] font-semibold transition-all hover:bg-primary-1 hover:text-light-1 mt-ad-[50]"
        >
          Купити
        </button>
      </div>
      <div class="flex flex-col justify-center w-ad-[300]">
        <p class="text-primary-1 mb-ad-[10]">
          <Icon
            name="ic:baseline-check"
            class="text-success-1 text-ad-[40] mr-ad-[5]"
          />
          Самовивіз
        </p>
        <p class="text-primary-1 mb-ad-[10]">
          <Icon
            name="ic:baseline-check"
            class="text-success-1 text-ad-[40] mr-ad-[5]"
          />
          «Нова пошта»
        </p>
        <p class="text-primary-1">
          <Icon
            name="ic:baseline-check"
            class="text-success-1 text-ad-[40] mr-ad-[5]"
          />
          Доставка кур'єром «Нова пошта»
        </p>
      </div>
    </div>
  </div>
</template>
