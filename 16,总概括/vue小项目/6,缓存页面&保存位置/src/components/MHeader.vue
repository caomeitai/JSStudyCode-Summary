<template>
  <div>
    <div class="m-header">
      <div class="m-img">
        <svg
          t="1573652924590"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2038"
          width="18"
          height="18"
        >
          <path
            d="M682.424996 911.667585c-8.490372 0-17.041118-2.841721-24.091698-8.685823L199.142038 522.585079c-8.662287-7.185656-13.682627-17.853623-13.682627-29.112038s5.02034-21.926382 13.682627-29.111015L658.333298 83.941807c16.068977-13.325493 39.902802-11.06194 53.228295 4.995781 13.313214 16.081257 11.073196 39.901779-4.995781 53.228295L282.502607 493.473041 706.565812 844.756663c16.068977 13.326517 18.308995 37.147038 4.995781 53.228295C704.080202 907.004379 693.301717 911.667585 682.424996 911.667585z"
            p-id="2039"
          />
        </svg>
      </div>
      <slot></slot>
    </div>
    <div class="empty"></div>
  </div>
</template>
<style lang="stylus" scoped>
.m {
  &-header {
    width: 100%;
    height: 60px;
    display: flex;
    line-height: 60px;
    font-size: 23px;
    color: #ffffff;
    background-color: #3385ff;
  }

  &-img {
    padding: 0px 120px 0px 20px;
  }
}

.empty {
  height: 60px;
}
</style>