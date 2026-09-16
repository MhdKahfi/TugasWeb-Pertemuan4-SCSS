import './scss/main.scss';

// ---------------------------------------------------------
// Validasi & interaksi formulir kontak
// (dipindahkan dari <script> inline di index.html asli)
// ---------------------------------------------------------
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const range = document.getElementById('antusias');
  const rangeLabel = document.getElementById('antusias-value');

  range.addEventListener('input', function () {
    rangeLabel.textContent = range.value;
  });

  const fields = ['nama', 'email', 'tanggal', 'topik', 'pesan'];

  function validateField(field) {
    field.setAttribute('data-touched', 'true');
    const errorSpan = form.querySelector('[data-error-for="' + field.id + '"]');
    if (!errorSpan) return true;

    if (field.validity.valid) {
      errorSpan.textContent = '';
      return true;
    }

    let message = 'Periksa kembali kolom ini.';
    if (field.validity.valueMissing) message = 'Kolom ini wajib diisi.';
    else if (field.validity.typeMismatch && field.type === 'email') message = 'Masukkan alamat email yang valid.';
    else if (field.validity.tooShort) message = 'Minimal ' + field.minLength + ' karakter.';

    errorSpan.textContent = message;
    return false;
  }

  fields.forEach(function (id) {
    const field = document.getElementById(id);
    field.addEventListener('blur', function () {
      validateField(field);
    });
    field.addEventListener('input', function () {
      if (field.getAttribute('data-touched') === 'true') validateField(field);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let allValid = true;
    fields.forEach(function (id) {
      const field = document.getElementById(id);
      if (!validateField(field)) allValid = false;
    });

    if (allValid) {
      status.textContent = 'Terima kasih! Pesan kamu berhasil disiapkan untuk dikirim.';
      form.reset();
      rangeLabel.textContent = '5';
    } else {
      status.textContent = 'Masih ada kolom yang perlu dilengkapi.';
    }
  });
})();
