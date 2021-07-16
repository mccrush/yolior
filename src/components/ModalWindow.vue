<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">О проекте</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="d-flex justify-content-center align-items-center mt-1 mb-3"
          >
            <img src="/logo.svg" width="64" height="64" alt="Yolior logo" />
            <h2 class="d-inline-block pt-2"><strong>Yolior</strong></h2>
          </div>
          <p>
            Yolior (юлиор) – сервис заказа доставки быстрого питания для города
            Славгорода и района
          </p>
          <p>
            Вы можете присылать актуальную информацию о кафе, блюдах, а также
            свои идеи и предложения по развитию сервиса на адрес
            <a href="mailto:yolior@mail.ru" title="Отправить письмо"
              ><strong>yolior@mail.ru</strong>
            </a>
          </p>
          <p>
            У вас есть возможность поддержать проект материально, все средства
            идут на оплату хостинга и домена<br />
            <strong>5469 0200 1229 4550</strong>
          </p>
          <p class="text-center mt-3 mb-1">
            Мы будем благодарны за любую поддержку!
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary w-100"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>