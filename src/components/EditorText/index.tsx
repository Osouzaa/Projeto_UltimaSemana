import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Bold from '@/icons/BoldSvg.svg'
import Italic from '@/icons/Italic.svg'
import Underlinee from '@/icons/Underline.svg'
import Risco from '@/icons/Risco.svg'
import x2 from '@/icons/x2.svg'
import x12 from '@/icons/x12.svg'
import ListaOrdenada from '@/icons/ListOrdenarda.svg'
import ListaNumber from '@/icons/OrdenNumber.svg'
import AvançarText from '@/icons/Avançar.svg'
import RecuarText from '@/icons/RecuarText.svg'
import Right from '@/icons/Right.svg'
import Center from '@/icons/CenterText.svg'
import Left from '@/icons/LeftText.svg'
import Justify from '@/icons/JustifyText.svg'
import LinkText from '@/icons/LinkText.svg'
import NoLInkText from '@/icons/NoLinkText.svg'
import DesfazerText from '@/icons/Desfazer.svg'
import Refazer from '@/icons/Refazer.svg'

import './style.css'

import SubScript from '@tiptap/extension-subscript'

const BoldIcon = () => <img src={Bold} alt="" />
const ItalicIcon = () => <img src={Italic} alt="" />
const IconUnderlinee = () => <img src={Underlinee} alt="" />
const Riscoo = () => <img src={Risco} alt="" />
const Xx2 = () => <img src={x2} alt="" />
const Xx12 = () => <img src={x12} alt="" />
const ListaOrdenadaa = () => <img src={ListaOrdenada} alt="" />
const ListNumber = () => <img src={ListaNumber} alt="" />
const AvançarTexts = () => <img src={AvançarText} alt="" />
const RecuarTexts = () => <img src={RecuarText} alt="" />
const RightText = () => <img src={Right} alt="" />
const CenterText = () => <img src={Center} alt="" />
const LeftText = () => <img src={Left} alt="" />
const JustifyCenter = () => <img src={Justify} alt="" />
const Links = () => <img src={LinkText} alt="" />
const NoLink = () => <img src={NoLInkText} alt="" />
const Desfazer = () => <img src={DesfazerText} alt="" />
const Refazers = () => <img src={Refazer} alt="" />

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] })
    ]
  })

  return (
    <RichTextEditor editor={editor} className="Container">
      <RichTextEditor.Toolbar sticky stickyOffset={60} className="my-editor">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} className="my-editor" />
          <RichTextEditor.Italic icon={ItalicIcon} />
          <RichTextEditor.Underline icon={IconUnderlinee} />
          <RichTextEditor.Strikethrough icon={Riscoo} />
          <RichTextEditor.Subscript icon={Xx2} />
          <RichTextEditor.Superscript icon={Xx12} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList icon={ListaOrdenadaa} />
          <RichTextEditor.OrderedList icon={ListNumber} />
          <RichTextEditor.OrderedList icon={AvançarTexts} />
          <RichTextEditor.OrderedList icon={RecuarTexts} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft icon={RightText} />
          <RichTextEditor.AlignCenter icon={CenterText} />
          <RichTextEditor.AlignJustify icon={LeftText} />
          <RichTextEditor.AlignRight icon={JustifyCenter} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link icon={Links} />
          <RichTextEditor.Unlink icon={NoLink} />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup style={{margin: '0 10.5em'}}>
          <RichTextEditor.Unlink icon={Desfazer} />
          <RichTextEditor.Unlink icon={Refazers} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content className="Title" style={{ width: '650px', color: '#C2C2C2' }} />
    </RichTextEditor>
  )
}
export default Demo
