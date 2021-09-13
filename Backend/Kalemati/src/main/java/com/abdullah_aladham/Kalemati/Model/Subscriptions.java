package com.abdullah_aladham.Kalemati.Model;

import java.util.Date;

//imprt javaa.util.Date;
public class Subscriptions {
private Long id;
private String name;
private Date  sub_start;
private Date sub_end;
private String subtoken;
//boolean didend;
private Long UserId;

Subscriptions(Long id ,String name,Date start,Date end,String token,Long uid){
	this.id=id;
	this.name=name;
	this.sub_start=start;
	this.sub_end=end;
	this.subtoken=token;
	this.UserId=uid;
}
public Long getid() {
	return id;

}
public void setId(Long newId) {
	this.id=newId;
}
public String getName() {
	return name;
}
public void Setname(String newname) {
	this.name=newname;
}
public Date getStartDate() {
	return sub_start;
}
public void setStartDate(Date newdate) {
	this.sub_start=newdate;
}
public Date GetendDate() {
	return sub_end;
}
public void setEnd(Date newEnd) {
	this.sub_end=newEnd;
}
}
