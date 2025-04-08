import {
    DefaultNodeTypes,
    SerializedLinkNode,
    type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
    JSXConvertersFunction,
    LinkJSXConverter,
    RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import "./RichText.css"

type NodeTypes = DefaultNodeTypes

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
    const { value, relationTo } = linkNode.fields.doc!
    if (typeof value !== 'object') {
        throw new Error('Expected value to be an object')
    }
    switch (relationTo) {
        case "doctors": return `/doctors/${value.id}`
        default: return `/${value.id}`
    }
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...LinkJSXConverter({ internalDocToHref }),
})

type Props = {
    data: DefaultTypedEditorState
    enableGutter?: boolean
    enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
    const { className = "", enableProse = true, enableGutter = true, ...rest } = props
    return <ConvertRichText converters={jsxConverters} className={`rich-text ${className}`} {...rest} />
}
