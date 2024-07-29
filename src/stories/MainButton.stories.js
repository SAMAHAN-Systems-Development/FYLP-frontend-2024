import MainButton from "@/components/ui/MainButton"

export default {
    title: "Main Button",
    component: MainButton,
    parameters: {
        layout: 'centered'
    }
}

export const Main = {
    args: {
        href: "/",
        children: 'button'
    }
}