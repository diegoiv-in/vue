new Vue({
    el:'#barrasPradera',
    data:{
        articulos:[
        {cant:5,nombre:'Proteína Muscletech',precio_unit:869,precio_items:0},
        {cant:2,nombre:'Burst BodyPerformance',precio_unit:349,precio_items:0}
        ],
        subtotal:0,
        iva:0,
        iva_porcentaje:.15,
        total:0,
    },
    methods:{
        calculoPrecioItems(item){
            item.precio_items=item.cant*item.precio_unit;
            return item.precio_items;
        },
        agregarArt(){
            this.articulos.push({
                cant:'',
                nombre:"",
                precio_unit:'',
                precio_items:''
            })
        }
    },
    computed:{
        Subtotal(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            this.iva=this.total*this.iva_porcentaje;
            this.subtotal=this.total-this.iva;
            return this.subtotal
        },
        Iva(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            this.iva=this.total*this.iva_porcentaje;
            return this.iva.toFixed(2) 
        },
        TotalPrecio(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            return this.total
        }
    }
});