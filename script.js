// ===========================================================
// Bài 3.2.2 – Tra cứu giá hoa quả (switch – case)
// ===========================================================

// Chuẩn hóa tên nhập vào trước khi so sánh:
//  - normalize("NFC"): chữ có dấu gõ từ các bộ gõ khác nhau về cùng một dạng
//  - trim() bỏ khoảng trắng 2 đầu, thay nhiều khoảng trắng liền nhau bằng 1
//  - toLowerCase(): không phân biệt chữ hoa, chữ thường
function chuanHoa(chuoi) {
  return chuoi.normalize("NFC").trim().replace(/\s+/g, " ").toLowerCase();
}

function xemGia() {
  const ten_hoa_qua = chuanHoa(document.getElementById("ten_hoa_qua").value);
  const ket_qua = document.getElementById("ket_qua");

  if (ten_hoa_qua === "") {
    ket_qua.textContent = "Vui lòng nhập tên hoa quả.";
    ket_qua.className = "khong-thay";
    return;
  }

  let gia = 0;
  // Gộp nhiều case có cùng giá; chấp nhận cả khi gõ không dấu
  switch (ten_hoa_qua) {
    case "ổi":
    case "oi":
    case "dưa hấu":
    case "dua hau":
      gia = 20000;
      break;
    case "táo":
    case "tao":
      gia = 30000;
      break;
    case "cam":
    case "chôm chôm":
    case "chom chom":
      gia = 40000;
      break;
    case "măng cụt":
    case "mang cut":
      gia = 50000;
      break;
    default:
      gia = 0;   // không có trong bảng giá
  }

  if (gia > 0) {
    ket_qua.textContent = gia + " VNĐ/kg";
    ket_qua.className = "co-gia";
  } else {
    ket_qua.textContent = "Tìm không thấy";
    ket_qua.className = "khong-thay";
  }
}

// Bấm nút "Xem giá" hoặc nhấn Enter đều tra cứu
document.getElementById("form-tra-cuu").addEventListener("submit", function (event) {
  event.preventDefault();   // không cho trang tải lại
  xemGia();
});
