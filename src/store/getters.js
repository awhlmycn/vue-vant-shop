export default {
    totalCount (state) {
        let total = 0;
        for( let id in state.cartList ){
            total += Number( state.cartList[ id ].num );
        }
        return total;
    },
    totalPrice (state) {
        let total = 0;
        for( let id in state.cartList ){
            let sigInfo = state.cartList[ id ];
            if( state.cartList[ id ].selected == true ){
                total += Number( sigInfo.now * sigInfo.num );
            }
        }
        return total;
    }
}