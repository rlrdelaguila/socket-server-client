unit uSSocket;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics, IdIPWatch,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.StdCtrls, Vcl.ExtCtrls,
  System.ImageList, Vcl.ImgList, Vcl.ComCtrls, System.Win.ScktComp, Vcl.Menus;

type
  TfServer = class(TForm)
    btnServer: TSpeedButton;
    Label1: TLabel;
    edtIP: TEdit;
    Panel1: TPanel;
    Panel2: TPanel;
    btnClient: TSpeedButton;
    btnClose: TSpeedButton;
    gpServer: TGroupBox;
    Label2: TLabel;
    edtPort: TEdit;
    gpMessages: TGroupBox;
    edtMessage1: TEdit;
    edtMessage2: TEdit;
    edtMessage3: TEdit;
    status: TStatusBar;
    btnMessage1: TButton;
    btnMessage2: TButton;
    btnMessage3: TButton;
    reLog: TRichEdit;
    lbClients: TListBox;
    sSocket: TServerSocket;
    pmLog: TPopupMenu;
    LimparLog1: TMenuItem;
    LimparLog2: TMenuItem;
    Panel3: TPanel;
    Panel4: TPanel;
    Splitter1: TSplitter;
    procedure btnClientClick(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure reLogChange(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure btnServerClick(Sender: TObject);
    procedure sSocketListen(Sender: TObject; Socket: TCustomWinSocket);
    procedure log(str: String; color: TColor);
    procedure sSocketClientRead(Sender: TObject; Socket: TCustomWinSocket);
    procedure sSocketClientConnect(Sender: TObject; Socket: TCustomWinSocket);
    procedure clientsChange(Sender: TObject);
    procedure sSocketClientDisconnect(Sender: TObject;
      Socket: TCustomWinSocket);
    procedure lbClientsDblClick(Sender: TObject);
    procedure sSocketClientError(Sender: TObject; Socket: TCustomWinSocket;
      ErrorEvent: TErrorEvent; var ErrorCode: Integer);
    procedure LimparLog1Click(Sender: TObject);
    procedure LimparLog2Click(Sender: TObject);
    procedure btnMessage1Click(Sender: TObject);
    procedure btnMessage2Click(Sender: TObject);
    procedure btnMessage3Click(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure sSocketThreadEnd(Sender: TObject; Thread: TServerClientThread);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  fServer: TfServer;
  clients: TStringList;

implementation

{$R *.dfm}

uses uCSocket, uSMessage;

procedure TfServer.btnServerClick(Sender: TObject);
var
  i: Integer;
begin
  if length(edtPort.Text) > 0 then
  begin
    if not sSocket.Active then
    begin
      try
        sSocket.Port := strtoint(edtPort.Text);
        try
          sSocket.Active := True;
        except
          log('IP indisponível.', clRed);
        end;
      except
        log(edtPort.Text + ' não é um inteiro válido.', clRed);
      end;
    end
    else
    begin
      for i := 0 to sSocket.Socket.ActiveConnections - 1 do
        sSocket.Socket.Connections[i].Close;

      lbClients.Items.Clear;
      lbClients.Items.Add('Clients Connecteds...');

      sSocket.Active := False;
      edtIP.Text := '';
      edtPort.ReadOnly := False;
      btnServer.Caption := 'Start';
      status.Panels.Items[1].Text := 'Server Down';
    end;
  end
  else
    log('Error: Porta não especificada!', clRed);
end;

procedure TfServer.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  Action := caFree;
end;

procedure TfServer.FormCreate(Sender: TObject);
begin
  reLog.styleElements := reLog.styleElements - [seFont];
  clients := TStringList.Create;
  clients.OnChange := clientsChange;
end;

procedure TfServer.reLogChange(Sender: TObject);
begin
  reLog.SetFocus;
  reLog.SelStart := reLog.GetTextLen;
  reLog.Perform(EM_SCROLLCARET, 0, 0);
end;

procedure TfServer.btnClientClick(Sender: TObject);
begin
  // if Assigned(fCLient) then
  // fCLient.Free;

  fCLient := TfCLient.Create(nil);
  fCLient.Show;
end;

procedure TfServer.btnCloseClick(Sender: TObject);
begin
  if sSocket.Active then
    sSocket.Active := False;
  application.Terminate;
end;

procedure TfServer.btnMessage1Click(Sender: TObject);
var
  i: Integer;
begin
  if (sSocket.Socket.ActiveConnections > 0) then
  begin
    for i := 0 to sSocket.Socket.ActiveConnections - 1 do
      sSocket.Socket.Connections[i].SendText(AnsiString(edtMessage1.Text));
  end
  else
    log('No client connected...', clRed);
end;

procedure TfServer.btnMessage2Click(Sender: TObject);
var
  i: Integer;
begin
  if (sSocket.Socket.ActiveConnections > 0) then
  begin
    for i := 0 to sSocket.Socket.ActiveConnections - 1 do
      sSocket.Socket.Connections[i].SendText(AnsiString(edtMessage2.Text));
  end
  else
    log('No client connected...', clRed);
end;

procedure TfServer.btnMessage3Click(Sender: TObject);
var
  i: Integer;
begin
  if (sSocket.Socket.ActiveConnections > 0) then
  begin
    for i := 0 to sSocket.Socket.ActiveConnections - 1 do
      sSocket.Socket.Connections[i].SendText(AnsiString(edtMessage3.Text));
  end
  else
    log('No client connected...', clRed);
end;

procedure TfServer.clientsChange(Sender: TObject);
begin
  lbClients.Items.Clear;
  lbClients.Items.Add('Clients Connecteds...');
  lbClients.Items.AddStrings(clients);

  btnMessage1.Enabled := clients.Count > 0;
  btnMessage2.Enabled := clients.Count > 0;
  btnMessage3.Enabled := clients.Count > 0;
end;

procedure TfServer.sSocketClientRead(Sender: TObject; Socket: TCustomWinSocket);
var
  received: string;
begin
  received := Socket.RemoteAddress + ' say: ' + string(Socket.ReceiveText);
  log(received, clGreen);
end;

procedure TfServer.sSocketClientConnect(Sender: TObject;
  Socket: TCustomWinSocket);
begin
  if (clients.IndexOf(Socket.RemoteAddress) = -1) then
    clients.Add(Socket.RemoteAddress);
end;

procedure TfServer.sSocketClientDisconnect(Sender: TObject;
  Socket: TCustomWinSocket);
begin
  clients.Delete(clients.IndexOf(Socket.RemoteAddress));
end;

procedure TfServer.sSocketClientError(Sender: TObject; Socket: TCustomWinSocket;
  ErrorEvent: TErrorEvent; var ErrorCode: Integer);
begin
  log('Error code: ' + ErrorCode.ToString, clRed);
end;

procedure TfServer.sSocketListen(Sender: TObject; Socket: TCustomWinSocket);
var
  r: TIdIPWatch;
begin
  r := TIdIPWatch.Create(nil);
  edtIP.Text := r.LocalIP;
  r.Free;

  btnServer.Caption := 'Stop';
  edtPort.ReadOnly := True;
  status.Panels.Items[1].Text := 'Server UP';
end;

procedure TfServer.sSocketThreadEnd(Sender: TObject;
  Thread: TServerClientThread);
begin
  log('teste', clGreen);
end;

procedure TfServer.lbClientsDblClick(Sender: TObject);
begin
  if lbClients.ItemIndex > 0 then
  begin
    if not Assigned(fMessage) then
    begin
      fMessage := TfMessage.Create(self);
      fMessage.Caption := 'Message to ' + clients[lbClients.ItemIndex - 1];
    end;

    case fMessage.ShowModal of
      mrOk:
        begin
          try
            if ((lbClients.ItemIndex - 1) >= 0) then
            begin
              sSocket.Socket.Connections[lbClients.ItemIndex - 1]
                .SendText(AnsiString(fMessage.edtMSG.Text));
            end
            else
              log('Error: Client disconnected.', clRed);
          except
            on E: Exception do
              log(E.Message, clRed);
          end;
          FreeAndNil(fMessage);
        end;
      mrCancel, mrClose:
        begin
          FreeAndNil(fMessage);
        end;
    end;
  end;
end;

procedure TfServer.LimparLog1Click(Sender: TObject);
begin
  reLog.Lines.Clear;
end;

procedure TfServer.LimparLog2Click(Sender: TObject);
begin
  reLog.Lines.SaveToFile(getCurrentDir + '\logServer.txt');
  ShowMessage
    ('Arquivo salvo como ''logServer.txt'' no mesmo diretório do programa');
end;

procedure TfServer.log(str: String; color: TColor);
begin
  reLog.SelAttributes.color := color;
  application.ProcessMessages;
  reLog.Lines.Add(FormatDateTime('dd.mm.yy hh:MM:ss:zzz - ', Now) + str);
end;

end.
