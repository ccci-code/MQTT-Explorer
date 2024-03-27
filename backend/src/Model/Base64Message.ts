import { Base64 } from 'js-base64'
import { Decoder } from './Decoder'

export class Base64Message {
  public base64Message: string
  private unicodeValue: string
  public decoder: Decoder
  public length: number

  private constructor(base64Str: string) {
    this.base64Message = base64Str
    this.unicodeValue = Base64.decode(base64Str)
    this.length = base64Str.length
    this.decoder = Decoder.NONE
  }

  public static toUnicodeString(message: Base64Message) {
    return message.unicodeValue || ''
  }

  public static fromBuffer(buffer: Buffer) {
    return new Base64Message(buffer.toString('base64'))
  }

  public static fromString(str: string) {
    return new Base64Message(Base64.encode(str))
  }

  public static toDataUri(message: Base64Message, mimeType: string) {
    return `data:${mimeType};base64,${message.base64Message}`
  }
}
