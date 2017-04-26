from urllib import request
from bs4 import BeautifulSoup
html='http://acm.hdu.edu.cn/showproblem.php?pid='
def   getonehtml(id):
      htmls=html+str(id)
      return htmls
def   visitonepage(htmls,len,i):
      file=open('acmqustionbase.txt','a',encoding='utf-8')
      htmls=request.urlopen(htmls)
      soup=BeautifulSoup(htmls,'html.parser')
      soup_title=soup.title
      soup_h1=soup.find('h1') 
      soup_span=soup.find(attrs={'style':'font-family:Arial;font-size:12px;font-weight:bold;color:green'})
      soup_panel_title=soup.find_all(attrs={'class':'panel_title','align':'left'})
      soup_panel_content=soup.find_all(attrs={'class':'panel_content'})  
      soup_img=soup.find_all('img') 
      file.write(soup_title.get_text()+'\n'+soup_h1.get_text()+'\n'+soup_span.get_text())
      for so in soup_panel_content:
          len=len+1    
      for soups in soup_panel_title:
          file.write(soups.get_text()+'\n')
          if i<len:
             file.write(soup_panel_content[i].get_text()+'\n')
             i=i+1
      for img in soup_img:
          file.write(img['src']+'\n')				 
      file.close()
def   main():
      for id in range(1000,5933):
          visitonepage(getonehtml(id),0,0)
