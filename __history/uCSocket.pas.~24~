unit uCSocket;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.ExtCtrls,
  Vcl.ComCtrls,
  Vcl.Buttons, System.Win.ScktComp, Vcl.Menus;

type
  TfClient = class(TForm)
    status: TStatusBar;
    Panel1: TPanel;
    Panel2: TPanel;
    GroupBox1: TGroupBox;
    GroupBox2: TGroupBox;
    reLog: TRichEdit;
    btnClose: TSpeedButton;
    btnCon: TSpeedButton;
    Label1: TLabel;
    Label2: TLabel;
    edtIP: TEdit;
    edtPort: TEdit;
    cSocket: TClientSocket;
    PopupMenu1: TPopupMenu;
    LimparLog1: TMenuItem;
    LimparLog2: TMenuItem;
    Panel3: TPanel;
    edtMessage1: TEdit;
    edtMessage2: TEdit;
    edtMessage3: TEdit;
    Panel4: TPanel;
    btnMessage1: TButton;
    btnMessage2: TButton;
    btnMessage3: TButton;
    procedure btnCloseClick(Sender: TObject);
    procedure cSocketConnect(Sender: TObject; Socket: TCustomWinSocket);
    procedure cSocketDisconnect(Sender: TObject; Socket: TCustomWinSocket);
    procedure btnConClick(Sender: TObject);
    function IsWrongIP(ip: string): Boolean;
    procedure log(str: String; color: TColor);
    procedure FormCreate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure cSocketRead(Sender: TObject; Socket: TCustomWinSocket);
    procedure cSocketError(Sender: TObject; Socket: TCustomWinSocket;
      ErrorEvent: TErrorEvent; var ErrorCode: Integer);
    procedure btnMessage1Click(Sender: TObject);
    procedure btnMessage2Click(Sender: TObject);
    procedure btnMessage3Click(Sender: TObject);
    procedure LimparLog1Click(Sender: TObject);
    procedure LimparLog2Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  fClient: TfClient;

implementation

{$R *.dfm}

procedure TfClient.btnCloseClick(Sender: TObject);
begin
  Close;
end;

procedure TfClient.btnConClick(Sender: TObject);
begin
  if cSocket.Active then
  begin
    cSocket.Active := False;
  end
  else if not IsWrongIP(edtIP.Text) then
  begin
    cSocket.Port := strtoint(edtPort.Text);
    cSocket.Host := edtIP.Text;
    cSocket.Active := True;
  end
  else
    log('Error - Ip inválido!', clRed);
end;

procedure TfClient.btnMessage1Click(Sender: TObject);
begin
  if cSocket.Active then
  begin
    cSocket.Socket.SendText(AnsiString(edtMessage1.Text));
  end
  else
    log('Servidor desconectado!', clRed);
end;

procedure TfClient.btnMessage2Click(Sender: TObject);
begin
  if cSocket.Active then
  begin
    cSocket.Socket.SendText(AnsiString(edtMessage2.Text));
  end
  else
    log('Servidor desconectado!', clRed);
end;

procedure TfClient.btnMessage3Click(Sender: TObject);
begin
  if cSocket.Active then
  begin
    cSocket.Socket.SendText(AnsiString(edtMessage3.Text));
  end
  else
    log('Servidor desconectado!', clRed);
end;

procedure TfClient.cSocketConnect(Sender: TObject; Socket: TCustomWinSocket);
begin
  btnCon.Caption := 'Disconnect';
  edtIP.ReadOnly := True;
  edtPort.ReadOnly := True;
  btnMessage1.Enabled := True;
  btnMessage2.Enabled := True;
  btnMessage3.Enabled := True;
  status.Panels.Items[1].Text := 'Connected';
end;

procedure TfClient.cSocketDisconnect(Sender: TObject; Socket: TCustomWinSocket);
begin
  btnCon.Caption := 'Connect';
  edtIP.ReadOnly := False;
  edtPort.ReadOnly := False;
  btnMessage1.Enabled := False;
  btnMessage2.Enabled := False;
  btnMessage3.Enabled := False;
  status.Panels.Items[1].Text := 'Disconnected';
end;

procedure TfClient.cSocketError(Sender: TObject; Socket: TCustomWinSocket;
  ErrorEvent: TErrorEvent; var ErrorCode: Integer);
begin
  log('Error code: ' + ErrorCode.ToString, clRed);
end;

procedure TfClient.cSocketRead(Sender: TObject; Socket: TCustomWinSocket);
var
  str: String;
begin
  str := string(Socket.ReceiveText);
  log(Socket.RemoteAddress + ' say: ' + str, clGreen);
end;

procedure TfClient.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  if cSocket.Active then
    cSocket.Active := False;
end;

procedure TfClient.FormCreate(Sender: TObject);
begin
  reLog.styleElements := reLog.styleElements - [seFont];
end;

function TfClient.IsWrongIP(ip: string): Boolean;
var
  z: Integer;
  i: Byte;
  st: array [1 .. 3] of Byte;
const
  ziff = ['0' .. '9'];
begin
  st[1] := 0;
  st[2] := 0;
  st[3] := 0;
  z := 0;
  Result := False;

  for i := 1 to Length(ip) do
    if ip[i] in ziff then
    begin

    end
    else
    begin
      if ip[i] = '.' then
      begin
        Inc(z);
        if z < 4 then
          st[z] := i
        else
        begin
          IsWrongIP := True;
          Exit;
        end;
      end
      else
      begin
        IsWrongIP := True;
        Exit;
      end;
    end;

  if (z <> 3) or (st[1] < 2) or (st[3] = Length(ip)) or (st[1] + 2 > st[2]) or
    (st[2] + 2 > st[3]) or (st[1] > 4) or (st[2] > st[1] + 4) or
    (st[3] > st[2] + 4) then
  begin
    IsWrongIP := True;
    Exit;
  end;

  z := strtoint(Copy(ip, 1, st[1] - 1));

  if (z > 255) or (ip[1] = '0') then
  begin
    IsWrongIP := True;
    Exit;
  end;

  z := strtoint(Copy(ip, st[1] + 1, st[2] - st[1] - 1));

  if (z > 255) or ((z <> 0) and (ip[st[1] + 1] = '0')) then
  begin
    IsWrongIP := True;
    Exit;
  end;

  z := strtoint(Copy(ip, st[2] + 1, st[3] - st[2] - 1));

  if (z > 255) or ((z <> 0) and (ip[st[2] + 1] = '0')) then
  begin
    IsWrongIP := True;
    Exit;
  end;

  z := strtoint(Copy(ip, st[3] + 1, Length(ip) - st[3]));

  if (z > 255) or ((z <> 0) and (ip[st[3] + 1] = '0')) then
  begin
    IsWrongIP := True;
    Exit;
  end;
end;

procedure TfClient.LimparLog1Click(Sender: TObject);
begin
  reLog.Lines.Clear;
end;

procedure TfClient.LimparLog2Click(Sender: TObject);
begin
  reLog.Lines.SaveToFile(getCurrentDir + '\logClient.txt');
  ShowMessage
    ('Arquivo salvo como ''logClient.txt'' no mesmo diretório do programa');
end;

procedure TfClient.log(str: String; color: TColor);
begin
  reLog.SelAttributes.color := color;
  Application.ProcessMessages;
  reLog.Lines.Add(FormatDateTime('dd.mm.yy hh:MM:ss - ', Now) + str);
end;

end.
