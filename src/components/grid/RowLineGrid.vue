<template>
    <b-row>
        <b-col :xl="sideXl" :lg="sideLg" :md="sideMd" :sm="sideSm" cols="0"></b-col>
        <b-col :xl="xl" :lg="lg" :md="md" :sm="sm" cols="12">
            <slot />
        </b-col>
        <b-col :xl="sideXl" :lg="sideLg" :md="sideMd" :sm="sideSm" cols="0"></b-col>
    </b-row>
</template>

<script>
const validateProp = (value) => [1,2,3,4,5,6,7,8,9,10,11,12].indexOf(parseInt(value)) !== -1;

const side = (value) =>  (12 - parseInt(value)) / 2;
export default {
    name: "RowLineGrid",
    props: {
        xl: {
            default: "6",
            validator: validateProp
        },
        lg: {
            default: "8",
            validator: validateProp
        },
        md: {
            default: "10",
            validator: validateProp
        },
        sm: {
            default: "12",
            validator: validateProp
        },
    },
    computed: {
        sideXl () {
            return side(this.xl);
        },
        sideLg () {
            return side(this.lg);
        },
        sideMd () {
            return side(this.md);
        },
        sideSm () {
            return side(this.sm);
        }
    }
}
</script>