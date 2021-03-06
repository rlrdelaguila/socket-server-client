program pSocket;

uses
  Vcl.Forms,
  uSSocket in 'uSSocket.pas' {fServer},
  uCSocket in 'uCSocket.pas' {fClient},
  Vcl.Themes,
  Vcl.Styles,
  uSMessage in 'uSMessage.pas' {fMessage};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.Title := 'Socket Server';
  Application.CreateForm(TfServer, fServer);
  TStyleManager.TrySetStyle('Emerald Light Slate');
  Application.Run;
end.
