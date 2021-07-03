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
          <div class="d-flex justify-content-center align-items-center mb-3">
            <img src="/logo.svg" width="64" height="64" alt="Yolior logo" />
            <h2 class="d-inline-block pt-2">Yolior</h2>
          </div>
          <p>
            Yolior (юлиор) – сервис заказа доставки быстрого питания для города
            Славгорода и района
          </p>
          <p>
            Мы будем благодарны вам за помощь в развитии Yolior. Вы можете
            присылать актуальную информацию о кафе, блюдах, а также свои идеи и
            предложения по улучшению сервиса на адрес
            <a href="mailto:yolior@mail.ru" title="Отправить письмо"
              ><strong>yolior@mail.ru</strong>
            </a>
          </p>
          <p>
            У вас также есть возможность поддержать проект материально, все
            средства идут на оплату хостинга и домена
            <strong>5469 0200 1229 4550</strong>
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