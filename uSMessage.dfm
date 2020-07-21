object fMessage: TfMessage
  Left = 0
  Top = 0
  BorderIcons = []
  BorderStyle = bsSingle
  Caption = 'fMessage'
  ClientHeight = 81
  ClientWidth = 315
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poMainFormCenter
  PixelsPerInch = 96
  TextHeight = 13
  object btnCancel: TButton
    Left = 24
    Top = 43
    Width = 129
    Height = 25
    Caption = 'Cancelar'
    ModalResult = 2
    TabOrder = 1
  end
  object btnSend: TButton
    Left = 168
    Top = 43
    Width = 129
    Height = 25
    Caption = 'Enviar'
    ModalResult = 1
    TabOrder = 2
  end
  object edtMSG: TEdit
    Left = 24
    Top = 16
    Width = 273
    Height = 21
    TabOrder = 0
    OnKeyDown = edtMSGKeyDown
  end
end
