unit uSMessage;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls;

type
  TfMessage = class(TForm)
    btnCancel: TButton;
    btnSend: TButton;
    edtMSG: TEdit;
    procedure edtMSGKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  fMessage: TfMessage;

implementation

{$R *.dfm}

procedure TfMessage.edtMSGKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  case Key of
    13:
      begin
        btnSend.Click;
      end;
  end;
end;

end.
