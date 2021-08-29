/*
 * @Author: @vedatbozkurt
 * @Email: info@wedat.org
 * @Date: 2021-08-29 21:28:01
 * @LastEditors: @vedatbozkurt
 * @LastEditTime: 2021-08-30 01:20:48
 */
export default ({ app: { $swal }}, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    // inject('sweetalert', (del) => {
    //     $swal({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, delete it!",
    //       }).then((result) => {
    //         if (result.isConfirmed) {              
    //           $swal("Deleted!", "Your file has been deleted.", "success");
    //           return del;
    //         }
    //       });
    // })
    inject('toast', (iconType, titleText) => {
        $swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: iconType,
            title: titleText,
            onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
    });
}