function hitung(tombol)
{
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total;
    
    
    switch (tombol) 
    {
        case 'tambah':
            if (isNaN(a1) || isNaN(a2)) 
            {
                alert("Harap masukkan angka!!");
            }    
            else 
            {
                total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;

        case 'kurang':
            if (isNaN(a1) || isNaN(a2)) 
            {
                alert("Harap masukkan angka!!");
            }    
            else 
            {
                total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;

            case 'kali':
            if (isNaN(a1) || isNaN(a2)) 
            {
                alert("Harap masukkan angka!!");
            }    
            else 
            {
                total = a1 * a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;

            case 'bagi':
            if (isNaN(a1) || isNaN(a2)) 
            {
                alert("Harap masukkan angka!!");
            }    
            else 
            {
                total = a1 / a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;

            case 'pangkat':
            if (isNaN(a1) || isNaN(a2)) 
            {
                alert("Harap masukkan angka!!");
            }    
            else 
            {
                total = Math.pow(a1,a2); //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;

        default:
            break;
        }
}