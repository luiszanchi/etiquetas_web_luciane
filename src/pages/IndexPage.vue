<template>
    <div>
        <b-form class="form" @submit="onSubmit" @reset="onReset">
            <b-container>
                <RowLineGrid>
                    <b-form-group
                        id="input-group-1"
                        label="Imagens por linha"
                        label-for="input-1"
                        description="Quantas imagens devem ir por linha?"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.qnt"
                            type="number"
                            placeholder="Número de itens por linha"
                            required
                            min="0"
                            max="10"
                        />
                    </b-form-group>
                </RowLineGrid>
                <RowLineGrid>
                    <UploadForm @input="onChangeImage" @inputName="onChangeImageName"/>
                </RowLineGrid>
                <RowLineGrid>
                    <b-button class="button-generate" variant="primary" @click="printElem">Gerar</b-button>
                </RowLineGrid>
            </b-container>
        </b-form>
        <div ref="printPage" class="printPage">
            
        </div>
    </div>    
</template>

<script lang="typescript">
//@ts-nocheck
import PrintImageService from '../services/PrintImageService.ts';
function addImageProcess(src){
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
}
import RowLineGrid from '@/components/grid/RowLineGrid.vue'
export default {
    name: "IndexPage",
    methods: {
        onSubmit() {
        },
        onReset() {
        },
        onChangeImageName() {
            
        },
        async onChangeImage(value) {
            if (! value) {
                this.image = null
                return;
            }
            this.image = await addImageProcess(value);
        },
       
        
        printElem()
        {
            let printImageService = new PrintImageService(
                this.$refs['printPage'],
                this.image,
                this.form.qnt,
            );

            printImageService.printElem();
        }
    },
    data() {
        return {
            form: {
                qnt: 4
            },
            image: null
        };
    },
    components: { RowLineGrid }
}
</script>

<style scoped>
    .form {
        display: flex;
    }
    .button-generate {
        width: 100%;
    }
    .printPage {
        width: 2480px;
        height: 3508px;
    }
</style>